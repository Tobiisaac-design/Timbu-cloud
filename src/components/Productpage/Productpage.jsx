import React from 'react'
import NavBar from '../NavBar/NavBar'
import Carousel from '../Carousel/Carousel'
import "./Productpage.css"

const Productpage = () => {
  return (
    <div id="product-page">
      <NavBar />
      <div className="row">
        <div className="column left-column">
          <div className="intro-text">
            <p>Craft your perfect home with our furniture</p>
            {/* <div className="arrow-icon">
            <img src={arrow} alt="arrow-icon" />
          </div> */}
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
      </div>
    </div>
  );
}

export default Productpage