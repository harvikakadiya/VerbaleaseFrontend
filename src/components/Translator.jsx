import React, { useState } from "react";
import "../styles/translator.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import axios from "axios";

const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [translatedText, setTranslatedText] = useState("");

  const translateText = async () => {
    console.log({ inputText });
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/translate-Text-system/v1/translate_text_generator`,
      [inputText, selectedLanguage]
    );
    console.log({ response });
    // Perform text summarization using your logic
    setTranslatedText(response?.data?.data);
  };

  return (
    <div className="translator-container">
      <Header />
      <div className="container">
        <Sidebar />
        <h1>Text Translator</h1>
        <label htmlFor="inputText">Enter Text to Translate:</label>
        <textarea
          id="inputText"
          placeholder="Type or paste your text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>

        {/* <div className="styles_UploadButtonContainer__L_4EU">
        <label htmlFor="Input" className="styles_uploadButton__Z_vGw">
          <input
            id="Input"
            name="Input"
            type="file"
            accept=".doc, .docx, .pdf"
          />
          <div className="styles_label__Jj_Cz">
            <p>(.doc, .docx, .pdf)</p>
          </div>
        </label>
      </div> */}

        <div className="custom-select">
          <select
            id="selectLanguage"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
        <div>
          <button onClick={translateText}>Translate</button>
        </div>
        <h2>Translated Text:</h2>
        <div id="translation">{translatedText}</div>
      </div>
    </div>
  );
};

export default Translator;
