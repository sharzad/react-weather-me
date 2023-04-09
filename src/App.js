import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Bali" />
        <footer>
          {" "}
          This project was coded by Shahrzad B.
          <a
            href="https://github.com/sharzad/react-weather-me"
            target={"_blank"}
            rel="noreferrer"
          >
            Github
          </a>
          &
          <a
            href="https://github.com/sharzad/react-weather-me"
            target={"_blank"}
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
