import List from "./components/List";
import Search from "./components/Search";
import "./App.css";

const welcome = { title: "React", greeting: "Hello" };

const App = () => {
  <div>
    <h1>
      {welcome.title} {welcome.greeting}
    </h1>
    <Search />
    <hr />
    <List />
  </div>;
};

export default App;
