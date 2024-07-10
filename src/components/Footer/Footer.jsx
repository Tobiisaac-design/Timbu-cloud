import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="Newsletter-container">
        <div className="crafted-charm">Crafted Charm</div>
        <div className="get-updates">
          Get free guides and updates from our team
        </div>
        <div className="container">
          <input
            type="text"
            className="your-email"
            placeholder="Your@email.com"
          />
          <button className="send">Send</button>
        </div>
      </div>

      <div className="payment-container">
        <h5>Payment</h5>
        <div className="paypal">Paypal</div>
        <div className="applepay">Applepay</div>
        <div className="credit-debit">Credit/Debit</div>
      </div>

      <div className="link-container">
        <p>Useful Links</p>
        <div className="home-page">
          <Link to="/">Home page</Link>
        </div>
        <div className="product-page">
          <Link to="/products">Product page</Link>
        </div>
        <div className="cart">
          <Link to="/checkout">Cart</Link>
        </div>
        <div className="contact-us">
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>

      <div className="socialmedia-link">
        <p className="join-us">Join Us</p>
        <div className="social-icons">
          <div className="fb"></div>
          <div className="ig"></div>
          <div className="lin"></div>
          <div className="x"></div>
        </div>
      </div>

      <div className="copyright">© Crafted Charm, 2024</div>
    </footer>
  );
};

export default Footer;
