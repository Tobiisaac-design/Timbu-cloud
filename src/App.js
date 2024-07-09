import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/Products/Products";
import ContactUs from "./pages/ContactUs/ContactUs";
import Checkout from "./pages/Checkout/Checkout";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <Router basename="/Timbu-cloud">
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
