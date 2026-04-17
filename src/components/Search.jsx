import * as React from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  console.log("Search renders");

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input onChange={handleChange} id="search" type="text" />
    </div>
  );
};

export default Search;
