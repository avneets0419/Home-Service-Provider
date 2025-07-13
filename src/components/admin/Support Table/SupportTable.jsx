import React, { useEffect, useState } from "react";
import "./SupportTable.css";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";

const SupportTable = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "support"), (snapshot) => {
      const supportData = snapshot.docs.map((doc) => ({
        id: doc.id, // Firebase doc ID
        ...doc.data(),
      }));
      // Optional: Sort recent first
      setTickets(
        supportData.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        )
      );
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="support-wrapper">
      <h1>Customer Support Tickets</h1>
      <div className="table-container">
        <table className="support-table">
          <thead>
            <tr>
              <th>Support ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Query</th>
              <th>Reply</th>
            </tr>
          </thead>
          <tbody>
            {tickets.length === 0 ? (
              <tr>
                <td colSpan="7">Loading tickets...</td>
              </tr>
            ) : (
              tickets.map((ticket, index) => (
                <tr key={ticket.id}>
                  <td>
                    {ticket.supportId ||
                      `SUP-${String(index + 1).padStart(3, "0")}`}
                  </td>
                  <td>{ticket.name}</td>
                  <td>{ticket.email}</td>
                  <td>{ticket.phone}</td>
                  <td>{ticket.service}</td>
                  <td>{ticket.message}</td>
                  <td>
                    <a
                      href={`mailto:${
                        ticket.email
                      }?subject=Re: Support Ticket ${
                        ticket.supportId ||
                        `SUP-${String(index + 1).padStart(3, "0")}`
                      }&body=Hi ${
                        ticket.name
                      },%0D%0A%0D%0ARegarding your query: "${
                        ticket.message
                      }"%0D%0A%0D%0A`}
                      className="reply-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reply
                    </a>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupportTable;
