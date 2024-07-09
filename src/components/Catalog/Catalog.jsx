import React from "react";
import "./Catalog.css";
import kingsdelight from "../../assets/images/kingsdelight.png";
import Royalcomfort from "../../assets/images/Royalcomfort.png";
import cosmicdinning from "../../assets/images/cosmicdinning.png";
import Elegant from "../../assets/images/Elegant.png";
import zen from "../../assets/images/zen.png";
import vintage from "../../assets/images/vintage.png";
// import kingsdelight from "../../assets/images/vintage.png";
// import kingsdelight from "../../assets/images/kingsdelight.png";
// import kingsdelight from "../../assets/images/kingsdelight.png";
// import kingsdelight from "../../assets/images/kingsdelight.png";
// import kingsdelight from "../../assets/images/kingsdelight.png";
// import kingsdelight from "../../assets/images/kingsdelight.png";
// import kingsdelight from "../../assets/images/kingsdelight.png";

const CatalogItem = ({ name, price, rating, reviews, imageUrl }) => (
  <div className="catalog-item">
    <div className="catalog-item-image">
      <img src={imageUrl || kingsdelight} alt={name} />
    </div>
    <div className="catalog-item-details">
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <div className="rating">
        {Array.from({ length: rating }, (_, i) => (
          <span key={i}>⭐</span>
        ))}
        <span>({reviews} Reviews)</span>
      </div>
    </div>
  </div>
);

// Example usage
const sampleItems = [
  {
    name: "King's Delight Sofa",
    price: "£550.00",
    rating: 4,
    reviews: 112,
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
  // {
  //   name: "King's Delight Sofa",
  //   price: "£550.00",
  //   rating: 4,
  //   reviews: 112,
  //   imageUrl: kingsdelight,
  // },
  // {
  //   name: "King's Delight Sofa",
  //   price: "£550.00",
  //   rating: 4,
  //   reviews: 112,
  //   imageUrl: kingsdelight,
  // },
  // {
  //   name: "King's Delight Sofa",
  //   price: "£550.00",
  //   rating: 4,
  //   reviews: 112,
  //   imageUrl: kingsdelight,
  // },
  // Add more items as needed
];

const Catalog = ({ items = sampleItems }) => (
  <div className="catalog">
    {items.map((item, index) => (
      <CatalogItem key={index} {...item} />
    ))}
    {/* Pagination and other components */}
  </div>
);

export default Catalog;
