const Search = () => {
  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input onChange={handleChange} id="search" type="text" />
    </div>
  );
};

export default Search;
