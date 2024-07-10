import React, { useState } from "react";
import shop from "../../assets/images/shop.png";
import heart from "../../assets/images/heart.png";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav">
      <div>
        <h3>Timbu Shop</h3>
      </div>
      <div className={`img ${isMenuOpen ? "active" : ""}`}>
        <img src={heart} alt="heart-icon" className="heart-icon" />
        <img src={shop} alt="shop-icon" className="shop-icon" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="toggle-icon">&#9776;</span>
      </div>
    </div>
  );
};

export default NavBar;
