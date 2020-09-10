// Libraries
import React from 'react';

export default function SearchBar(props) {
  return (
    <div className="searchBar">
      <form className="search-form">
        <input
          name="search"
          type="text"
          placeholder="Search..."
          value={props.value}
          onChange={props.onChange}
          className="search-input"
        />
        <button className="searchBtn" onClick={props.onClick} >
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
}