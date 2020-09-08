import React from "react";
import "./loader.css";

const Loader = ({ ...props }) => {
  return (
    <div>
      <p>{props.message}</p>
      <div className="spinner-container">
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
