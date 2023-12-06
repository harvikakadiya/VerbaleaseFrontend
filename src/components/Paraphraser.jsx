import React, { useState } from "react";
import "../styles/paraphraser.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import axios from "axios";

const Paraphraser = () => {
  const [inputText, setInputText] = useState("");
  const [paraphrasedText, setParaphrasedText] = useState("");

  const paraphraseText = async () => {
    try {
      console.log({ inputText });
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/pharaphrase-Text-system/v1/paraphrase_text_generator`,
        [inputText]
      );
      console.log({ response });
      setParaphrasedText(response?.data?.data);
    } catch (error) {}
    // Perform text paraphrasing using your logic
  };

  return (
    <div className="paraphraser-container">
      <Header />
      <div className="container">
        <Sidebar />
        <h1>Text Paraphraser</h1>
        <label htmlFor="inputText">Enter Text to Paraphrase:</label>
        <textarea
          id="inputText"
          placeholder="Type or paste your text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>

        <button onClick={paraphraseText}>Paraphrase</button>

        <h2>Paraphrased Text:</h2>
        <div id="paraphrase">{paraphrasedText}</div>
      </div>
    </div>
  );
};

export default Paraphraser;
