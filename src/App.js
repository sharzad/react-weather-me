import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
       
        <Weather />
        <footer>
          {" "}
          This project was coded by Shahrzad B.
          <a href="#" target={"_blank"}>
            Github
          </a>
          &
          <a href="#" target={"_blank"}>
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
