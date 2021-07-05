import React from "react";

function SearchBar({ placeholder }) {
  return (
    <form className="searchForm">
      <input className="searchInput" placeholder={placeholder} />
      <button className="clearButton"></button>
      <button className="searchButton"></button>
    </form>
  );
}

export default SearchBar;
