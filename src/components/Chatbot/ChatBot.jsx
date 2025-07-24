import React, { useState, useEffect, useRef } from "react";
import "./ChatBot.css";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useUser, useAuth } from "@clerk/clerk-react"; // 🆕 Added useAuth

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your Home Service Assistant. How can I help you today?",
      sender: "bot",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [pendingBooking, setPendingBooking] = useState(null);

  const messagesEndRef = useRef(null);
  const { user } = useUser();
  const { isSignedIn } = useAuth(); // 🆕

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const callGemini = async (prompt) => {
    try {
      const payload = {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.5 },
      };
      const apiKey = "AIzaSyB6rNrOomt4dvC6obHk1zyLA1WsNFGbhYE";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      const content = result?.candidates?.[0]?.content?.parts?.[0]?.text;
      return content || "Sorry, I couldn't generate a response.";
    } catch (error) {
      console.error("Gemini API error:", error);
      setError("Could not connect to Gemini. Try again later.");
      return "Oops! Something went wrong.";
    }
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;
    const userMessage = userInput.trim();
    setMessages((prev) => [...prev, { text: userMessage, sender: "user" }]);
    setUserInput("");
    setIsTyping(true);
    setError("");

    if (pendingBooking) {
      const phone = userMessage.match(/\d{10}/)?.[0];
      if (phone) {
        const bookingReply = await createOrder({
          ...pendingBooking,
          phone,
        });
        setMessages((prev) => [...prev, { text: bookingReply, sender: "bot" }]);
        setPendingBooking(null);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            text: "❌ That doesn't look like a valid 10-digit phone number. Please try again.",
            sender: "bot",
          },
        ]);
      }
      setIsTyping(false);
      return;
    }

    const isBooking = /book|schedule|repair|service/i.test(userMessage);

    // 🆕 Check if user is signed in before booking
    if (isBooking && !isSignedIn) {
      setMessages((prev) => [
        ...prev,
        {
          text: "🔐 Please sign in to continue with your booking.",
          sender: "bot",
          action: {
            label: "🔓 Sign In",
            url: "https://firm-possum-98.accounts.dev/sign-in",
          },
        },
      ]);
      setIsTyping(false);
      return;
    }

    if (isBooking) {
      const geminiResponse = await callGemini(
        `Extract name, service, address, and phone from this message: "${userMessage}". Return JSON with keys: name, service, address, phone.`
      );

      try {
        const extracted = JSON.parse(geminiResponse.match(/{.*}/s)[0]);

        const name = extracted.name || user?.fullName || "Guest";
        const email = user?.emailAddresses?.[0]?.emailAddress || "";

        if (!extracted.phone) {
          setPendingBooking({ name, email, ...extracted });
          setMessages((prev) => [
            ...prev,
            {
              text: "📞 Could you please provide your phone number to complete the booking?",
              sender: "bot",
            },
          ]);
        } else {
          const bookingReply = await createOrder({
            name,
            email,
            phone: extracted.phone,
            service: extracted.service,
            address: extracted.address,
          });
          setMessages((prev) => [
            ...prev,
            { text: bookingReply, sender: "bot" },
          ]);
        }
      } catch (e) {
        console.error("Parsing error:", e);
        setMessages((prev) => [
          ...prev,
          {
            text: "Sorry, I couldn't understand your request clearly.",
            sender: "bot",
          },
        ]);
      }
    } else {
      const response = await callGemini(userMessage);
      setMessages((prev) => [...prev, { text: response, sender: "bot" }]);
    }

    setIsTyping(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const createOrder = async ({ name, email, phone, service, address }) => {
    try {
      const snapshot = await getDocs(collection(db, "services"));
      const allServices = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const matchedService = allServices.find((s) =>
        s.title.toLowerCase().includes(service.toLowerCase())
      );

      if (!matchedService) {
        return `❌ Could not find a service matching "${service}". Please try again.`;
      }

      const price = matchedService.price || "N/A";
      const orderId = `PR-${Date.now().toString().slice(-5)}`;

      await addDoc(collection(db, "orders"), {
        orderId,
        name,
        email: email || "noemail@example.com",
        phone,
        service: matchedService.title,
        address,
        price,
        timestamp: serverTimestamp(),
      });

      return `✅ Your ${matchedService.title} service has been booked for ₹${price}, ${name}!`;
    } catch (error) {
      console.error("Failed to book service:", error);
      return "❌ Booking failed. Please try again later.";
    }
  };

  return (
    <>
      <button className="chatbot-float-button" onClick={() => setIsOpen(true)}>
        💬
      </button>

      {isOpen && (
        <div className="chatbot-modal">
          <div className="chatbot-header">
            <h2>AI Assistant</h2>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              &times;
            </button>
          </div>

          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${
                  msg.sender === "user" ? "user" : "bot"
                }`}
              >
                <p>{msg.text}</p>
                {msg.action && (
                  <a
                    href={msg.action.url}
                    className="chat-signin-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {msg.action.label}
                  </a>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="chat-typing">Assistant is typing...</div>
            )}
            <div ref={messagesEndRef}></div>
          </div>

          {error && <div className="chat-error">{error}</div>}

          <div className="chatbot-footer">
            <textarea
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              rows="2"
            ></textarea>
            <button
              onClick={handleSendMessage}
              disabled={isTyping || !userInput.trim()}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
