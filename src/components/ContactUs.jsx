// ContactUs.js

import React from 'react';
import '../styles/contact-us.css';
import Header from './Header';
import Sidebar from './Sidebar';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
         <Header/>
          <div className="container">
         <Sidebar/>
      <form action="mailto:your_email@example.com" method="post" encType="text/plain">
        <h1>Contact Us</h1>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Type your message here..." required></textarea>

        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default ContactUs;