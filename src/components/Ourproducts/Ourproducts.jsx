import React, { useState } from "react";
import "./Ourproducts.css";
import NavBar from "../NavBar/NavBar"
import Pagination from "../Pagination/Pagination";
import kingsdelight from "../../assets/images/kingsdelight.png";
import Royalcomfort from "../../assets/images/Royalcomfort.png";
import cosmicdinning from "../../assets/images/cosmicdinning.png";
import Elegant from "../../assets/images/Elegant.png";
import zen from "../../assets/images/zen.png";
import vintage from "../../assets/images/vintage.png";
import shop from "../../assets/images/shop.png";
import heart from "../../assets/images/heart.png";
import search from "../../assets/images/search.png";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";


const Ourproducts = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Example product data (replace with your actual data)
  const products = [
    {
      name: "King's Delight Sofa",
      price: "£550.00",
      rating: 4,
      reviews: 112,
      category: "living-room",
      imageUrl: kingsdelight,
    },
    {
      name: "Royal Comfort Bed",
      price: "£550.00",
      rating: 4,
      reviews: 112,
      imageUrl: Royalcomfort,
    },
    {
      name: "Cosmic Dining Table",
      price: "£550.00",
      rating: 4,
      reviews: 112,
      imageUrl: cosmicdinning,
    },
    {
      name: "Elegant Lounge Chair",
      price: "£550.00",
      rating: 4,
      reviews: 112,
      imageUrl: Elegant,
    },
    {
      name: "Zen Garden Sofa",
      price: "£550.00",
      rating: 4,
      reviews: 112,
      imageUrl: zen,
    },
    {
      name: "Vintage Bookshelf",
      price: "£550.00",
      rating: 4,
      reviews: 112,
      imageUrl: vintage,
    },
    {
      name: "Royal Comfort Bed",
      price: "£550.00",
      rating: 4,
      reviews: 112,
      imageUrl: Royalcomfort,
    },
    {
      name: "Cosmic Dining Table",
      price: "£550.00",
      rating: 4,
      reviews: 112,
      imageUrl: cosmicdinning,
    },
    {
      name: "Elegant Lounge Chair",
      price: "£550.00",
      rating: 4,
      reviews: 112,
      imageUrl: Elegant,
    },
    {
      name: "Zen Garden Sofa",
      price: "£550.00",
      rating: 4,
      reviews: 112,
      imageUrl: zen,
    },
    {
      name: "Vintage Bookshelf",
      price: "£550.00",
      rating: 4,
      reviews: 112,
      imageUrl: vintage,
    },
    {
      name: "Vintage Bookshelf",
      price: "£550.00",
      rating: 4,
      reviews: 112,
      imageUrl: vintage,
    },
    // Add more products to match your data...
  ];

  // Filter products based on the selected value
  const filteredProducts =
    selectedFilter === "all"
      ? products // Show all products
      : products.filter((product) => product.category === selectedFilter);

  // Pagination settings
  const itemsPerPage = 12; // Number of items per page
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="ourproductpage">
      <NavBar />
      <form className="search-form">
        <div className="search-input-wrapper">
          <img src={search} alt="search-icon" className="search-icon" />
          <input
            type="text"
            name="search"
            placeholder="search.."
            className="search-input"
          />
        </div>
      </form>

      <div className="product-nav">
        <div className="product-types">
          <ul>
            <li>
              <a href="#" onClick={() => setSelectedFilter("all")}>
                All Products
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setSelectedFilter("living-room")}>
                Living Room
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setSelectedFilter("bedroom")}>
                Bedroom
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setSelectedFilter("kitchen")}>
                Kitchen
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setSelectedFilter("table")}>
                Table
              </a>
            </li>
          </ul>
        </div>
        <div className="filter">
          <label htmlFor="product-filter">Filter:</label>
          <select
            id="product-filter"
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option value="all">All Products</option>
            <option value="living-room">Living Room</option>
            <option value="bedroom">Bedroom</option>
            <option value="kitchen">Kitchen</option>
            <option value="table">Table</option>
          </select>
        </div>
      </div>

      <div className="catalog">
        {visibleProducts.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.imageUrl} alt={product.name} />
            <div className="product-details">
              <h4>{product.name}</h4>
              <p className="price">{product.price}</p>
              <div className="rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    style={{ color: i < product.rating ? "#ffc107" : "#ddd" }}
                  />
                ))}
              </div>
              <p>{product.reviews} reviews</p>
              {/* <div className="product-icons">
                <img src={heart} alt="heart-icon" className="product-icon" />
                <img src={shop} alt="shop-icon" className="product-icon" />
              </div> */}
            </div>
          </div>
        ))}
      </div>

      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Ourproducts;
