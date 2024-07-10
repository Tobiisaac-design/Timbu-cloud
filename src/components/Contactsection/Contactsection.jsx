import React from "react";
import "./Contactsection.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <p id="heading">Contact Us</p>
      <div className="row">
        <div className="form-container">
          <p>Do you need help? Send us a message</p>
          <form>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                defaultValue="John Doe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue="johndoe@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                defaultValue="Write your message here"
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="column">
          <div className="info-container">
            <div className="info-item">
              <div className="logo address-logo"></div>
              <p className="info-text">
                13, Ashley Walters street, Ikeja, Lagos, Nigeria
              </p>
            </div>
            <div className="info-item">
              <div className="logo phone-logo"></div>
              <p className="info-text">+44 081-1236-4568</p>
            </div>
            <div className="info-item">
              <div className="logo email-logo"></div>
              <p className="info-text">Info@CraftedCharm.com</p>
            </div>
            <div className="info-item">
              <div className="logo social-media-logo"></div>
              <div className="social-media-icons">
                <div className="social-icon facebook-icon"></div>
                <div className="social-icon twitter-icon"></div>
                <div className="social-icon instagram-icon"></div>
                <div className="social-icon linkedin-icon"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
