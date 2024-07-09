import React from "react";
// import NavBar from "../NavBar/NavBar";
// import Carousel from "../Carousel/Carousel";
// import arrow from "../../assets/images/arrow.png";
// import "./Homehero.css";
import Ourproducts from "../Ourproducts/Ourproducts";

const Homehero = () => {
  return (
    <div>
      <Ourproducts/>
      
      {/* <div className="row">
        <div className="column left-column">
          <div className="intro-text">
            <p>Craft your perfect home with our furniture</p>
            <div className="arrow-icon">
              <img src={arrow} alt="arrow-icon" />
            </div>
          </div>
          <div className="description-container">
            <div className="sub-description">
              <p id="para1">
                Elevate your Space with Crafted Charm Furniture Designed for
                Timeless Elegance
              </p>
              <p id="para2">
                Explore our unique selection of handcrafted furniture made to
                add elegance and coziness to any space
              </p>
            </div>
            <div className="shop-button">
              <button>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="column right-column">
          <Carousel />
        </div>
        <div class="figure-container">
          <div>
            <p>10K</p>
            <p>Customers</p>
          </div>
          <div class="vertical-line"></div>
          <div>
            <p>20k</p>
            <p>Sold</p>
          </div>
          <div class="vertical-line"></div>
          <div>
            <p>300</p>
            <p>Outlets</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Homehero;
