import List from "./components/List";
import Search from "./components/Search";
import "./App.css";

const welcome = { title: "React", greeting: "Hello" };

function App() {
  return (
    <div>
      <h1>
        {welcome.title} {welcome.greeting}
      </h1>
      <Search />
      <hr />
      <List />
    </div>
  );
}

export default App;
