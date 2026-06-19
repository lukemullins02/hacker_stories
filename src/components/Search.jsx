import * as React from "react";

const Search = ({ search, onSearch }) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input value={search} onChange={onSearch} id="search" type="text" />
    </div>
  );
};

export default Search;
