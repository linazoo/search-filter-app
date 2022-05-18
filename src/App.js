import "./styles.css";
import React from "react";
import JSONDATA from "./mock-data.json";

export default function App() {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return <li key={key}>{val.first_name}</li>;
      })}
    </div>
  );
}
