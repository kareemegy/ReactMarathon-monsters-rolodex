import React from "react";
import "./SearchBox.css";
const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      onChange={handleChange}
      type="search"
      placeholder={placeholder}
    />
  );
};

export default SearchBox;
