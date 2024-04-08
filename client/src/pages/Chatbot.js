import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Paper, TextField, Button, Typography } from "@mui/material";
import { KeyboardVoice, Send } from "@mui/icons-material";

const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const chatHistoryRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.onresult = handleSpeechResult;

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  useEffect(() => {
    // Scroll to the bottom of the chat history when it updates
    chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
  }, [chatHistory]);

  const handleSpeechResult = (event) => {
    const transcript = event.results[0][0].transcript;
    setQuestion(transcript);
    handleAskQuestion(); // Automatically submit the voice input

    // Add the transcribed text to the chat history
    setChatHistory([...chatHistory, { role: "user", content: transcript }]);
  };

  const handleVoiceInput = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
    }
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAskQuestion = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/", {
        question: question,
      });

      setResponse(response?.data?.response);
      setChatHistory([
        ...chatHistory,
        { role: "user", content: question },
        { role: "chatbot", content: response?.data?.response },
      ]);
      setQuestion("");
    } catch (error) {
      console.error("Error asking question:", error?.response?.data?.error);
    }
  };

  // ...

  return (
    <Paper
      elevation={3}
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        left: 0,
        top: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        ref={chatHistoryRef}
        style={{
          flex: 1,
          overflowY: "auto", // Set overflowY to "auto" to make it scrollable
          maxHeight: "calc(100% - 64px)", // Adjusted height to leave space for the input and button
          padding: 16,
          backgroundColor: "#F0F0F0",
        }}
      >
        {chatHistory.map((message, index) => (
          <div
            key={index}
            style={{
              textAlign: message.role === "user" ? "left" : "right",
              backgroundColor: message.role === "user" ? "#E3F2FD" : "#FFF",
              padding: 8,
              borderRadius: 8,
              marginBottom: 8,
            }}
          >
            <Typography variant="body1">{message.content}</Typography>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", padding: 16, alignItems: "center" }}>
        <TextField
          size="small"
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          value={question}
          onChange={handleQuestionChange}
          style={{ marginRight: 16 }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleAskQuestion();
            }
          }}
        />

        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={handleAskQuestion}
          style={{ height: "50px", borderRadius: "50%" }}
        >
          <Send />
        </Button>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          style={{ marginLeft: 8, height: "50px", borderRadius: "50%" }}
          onClick={handleVoiceInput}
        >
          <KeyboardVoice />
        </Button>
      </div>
    </Paper>
  );

  // ...
};

export default Chatbot;
