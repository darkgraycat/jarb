import React from "react";
import "./App.scss";
import logo from "./assets/logo.png";

export function App() {
  return (
    <div className="App">
      <h1>Just Another React Boilerplate</h1>
      <img src={logo} alt="logo" />
      <h4>Used:</h4>
      <ul>
        <li>typescript</li>
        <li>esbuild</li>
        <li>sass</li>
      </ul>
      <h4>Enjoy!</h4>
      <p>
        If you have a problem:{" "}
        <a href="https://github.com/darkgraycat/jarb/issues">Issues</a>
      </p>
    </div>
  );
}
