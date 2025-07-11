// components/VoiceAssistant.jsx
import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceAssistant = ({ onCommandDetected }) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript.toLowerCase().includes("book")) {
      onCommandDetected(transcript); // Send transcript to parent for parsing
      resetTranscript();
    }
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <p>Speech recognition not supported in this browser.</p>;
  }

  return (
    <div className="voice-control">
      <button onClick={SpeechRecognition.startListening}>
        🎙️ Start Talking
      </button>
      <p>{listening ? "Listening..." : "Click to start speaking"}</p>
    </div>
  );
};

export default VoiceAssistant;
