import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/kabul2022/" target="-blank">
            Aziza Rezaie
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/kabul2022/react-weather-app"
            target="-blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
