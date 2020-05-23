import React from "react";
import "./loader.css";

const Loader = (props) => {
  return props.show ? (
    <div className="loaderContainer">
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  ) : null;
};

export default Loader;
