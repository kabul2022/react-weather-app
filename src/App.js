import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/kabul2022/"
            target="-blank"
            rel="noopener noreferrer"
          >
            Aziza Rezaie
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/kabul2022/react-weather-app"
            target="-blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://master--silver-madeleine-9f0678.netlify.app/"
            target="-blank"
            rel="noopener noreferrer"
          >
            Nitlify
          </a>
        </footer>
      </div>
    </div>
  );
}
