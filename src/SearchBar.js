import React from "react";
import "./SearchBar.css";
import CurrentStatus from "./CurrentStatus";

const SearchBar = ({ changeFilter, currentStatus }) => {
  return (
    <div className="SearchBar">
      <h2 id="filter-text">Filter Projects</h2>
      <CurrentStatus currentStatus={currentStatus} />
      <div className="Academic-Project-layout">
        <button
          className="button"
          value="Academic Project"
          onClick={changeFilter}
        >
          Academic Project
        </button>
        <button
          className="button"
          value="Personal Project"
          onClick={changeFilter}
        >
          Personal Project
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
