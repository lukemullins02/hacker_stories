import List from "./components/List";
import Search from "./components/Search";
import * as React from "react";

import "./App.css";
import InputWithLabel from "./components/InputWithLabel";

const welcome = { title: "React", greeting: "Hello" };

const useStorageState = (key, initalState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initalState,
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = useStorageState("search", "React");

  React.useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const [storiesArr, setStoriesArr] = React.useState(stories);

  const searchedStories = storiesArr.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <h1>
        {welcome.title} {welcome.greeting}
      </h1>
      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <hr />
      <List list={searchedStories} setList={setStoriesArr} />
    </div>
  );
};

export default App;
