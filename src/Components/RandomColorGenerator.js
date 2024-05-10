import React from "react";
import "./styles.css";

const RandomColorGenerator = () => {
  return (
    <div className="container">
      <h1> Random Color Generator</h1>
      <div className="main">
        <div className="btn--container">
          <button className="btn btn--hex">Create HEX Color</button>
          <button className="btn btn--rgb">Create RGB Color</button>
          <button className="btn btn--hex">Generate Random Color</button>
        </div>
        <div className="color--title">
          <h3>HEX Color</h3>
        </div>
        <div className="color--ref">
          <h2>#FFFFFF</h2>
        </div>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
