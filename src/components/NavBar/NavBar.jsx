import React from "react";
import shop from "../../assets/images/shop.png";
import heart from "../../assets/images/heart.png"
import "./NavBar.css";

const NavBar = () => {

  return (

   
      <div className="nav">
        <div>
          <h3>Timbu Shop</h3>
        </div>
        <div className="img">
          <img src={heart} alt="heart-icon" className="heart-icon" />
          <img src={shop} alt="shop-icon" className="shop-icon" />
        </div>
      </div>
      

  );
};

export default NavBar;
