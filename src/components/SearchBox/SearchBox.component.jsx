import React from 'react';
import './SearchBox.styles.css';

export const SearchBox = ({placeholder, handleSearch, searchField}) => (
  <div className="search-box">
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleSearch}
      value={searchField}
    />
  </div>
)