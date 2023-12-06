import React, { useState } from "react";
import "../styles/summarizer.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";

const Summarizer = () => {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");

  const summarizeText = async () => {
    console.log({ inputText });
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/summarize-Text-system/v1/summarize_text_generator`,
      [inputText]
    );
    console.log({ response });
    // Perform text summarization using your logic
    setSummary(response?.data?.data);
  };

  return (
    <div className="summarizer-container">
      <Header />
      <div className="container">
        <Sidebar />
        <h1>Text Summarizer</h1>
        <label htmlFor="inputText">Enter Text to Summarize:</label>
        <textarea
          id="inputText"
          placeholder="Enter your text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>

        <button onClick={summarizeText}>Summarize</button>

        <h2>Summary:</h2>
        <div id="summary">{summary}</div>
      </div>
    </div>
  );
};

export default Summarizer;
