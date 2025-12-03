import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-circle"></div>
      <h2 className="loader-text">Loading...</h2>
    </div>
  );
};

export default Loader;
