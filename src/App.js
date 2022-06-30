import "./App.css";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Resume from "./Resume";
import { React, useState } from "react";

function App() {
  const [filter, setFilter] = useState();

  const changeFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="App">
      <ul className="Navbar">
        <Navbar content={"About Me"} />
        <Navbar content={"Skills"} />
        <Navbar content={"Projects"} />
        <Navbar content={"Resume"} />
        <Navbar content={"Contact"} />
      </ul>
      <SearchBar currentStatus={filter} changeFilter={changeFilter} />
      <Resume />
      {console.log("Current filter", filter)}
    </div>
  );
}

export default App;
