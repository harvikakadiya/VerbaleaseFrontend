// HelpCenter.js

import React from 'react';
import '../styles/help.css';
import Header from './Header';
import Sidebar from './Sidebar';

const Help = () => {
  const toggleAnswer = (id) => {
    const answer = document.getElementById(id);
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  };

  return (
    <div className="help-center-container">
         <Header/>
          <div className="container">
         <Sidebar/>
      <h1>Help Center</h1>
      <form>
        <div className="faq">
          <div className="faq-question" onClick={() => toggleAnswer('faq1')}>
            (1) Paraphraser, Translator, AI-Chat, or Summarizer Checker Not Working?
          </div>
          <div className="faq-answer" id="faq1">
            Answer. First, try again, sometimes a single request can fail. Sometimes we have downtime up to 1 hour.
            If the issue persists, please contact us, we will fix the issue as soon as possible.
          </div>
        </div>

        <div className="faq">
          <div className="faq-question" onClick={() => toggleAnswer('faq2')}>
            (2) How do I use the text summarizer?
          </div>
          <div className="faq-answer" id="faq2">
            Answer. To use the text summarizer, simply paste your text into the input area and click the "Summarize"
            button.
          </div>
        </div>

        <div className="faq">
          <div className="faq-question" onClick={() => toggleAnswer('faq3')}>
            (3) Is the paraphraser accurate?
          </div>
          <div className="faq-answer" id="faq3">
            Answer. The paraphraser provides varied results based on the input text. It aims to rephrase sentences
            while maintaining the original meaning.
          </div>
        </div>

        <div className="faq">
          <div className="faq-question" onClick={() => toggleAnswer('faq4')}>
            (4) How can I delete my account?
          </div>
          <div className="faq-answer" id="faq4">
            Answer. Go to the subscription tab on your account page and find the "Delete Account" button on the
            bottom.
          </div>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Help;