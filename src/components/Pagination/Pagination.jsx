import React from "react";
import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <div className="results">
        <span>{`Results ${currentPage}-${currentPage * 12} of ${
          totalPages * 12
        }`}</span>
      </div>
      <div className="page-numbers">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`page-number ${number === currentPage ? "active" : ""}`}
            onClick={() => onPageChange(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="chevron-right">
        <button
          className="chevron-button"
          onClick={() => onPageChange(currentPage + 1)}
        >
          <svg
            className="chevron-svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5898 12L9.58984 19L7.99984 17.41L13.5898 12L7.99984 6.58997L9.58984 5.00003L16.5898 12Z"
              fill="#FFFFFF"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
