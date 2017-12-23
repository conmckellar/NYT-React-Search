import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron text-center">
    <h1>React Articles</h1>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://api.nytimes.com/svc/archive/v1/2016/1.json"
    >
      Powered by the New York Times API
    </a>
  </div>
);

export default Jumbotron;
