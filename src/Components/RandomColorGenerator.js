import React, { useState, useEffect } from "react";
import "./styles.css";

const RandomColorGenerator = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "hex") handleCreateRandomHexColor();
    else handleCreateRandomRgbColor();
  }, [typeOfColor]);

  return (
    <div
      className="container"
      style={{
        background: color,
      }}
    >
      <h1> Random Color Generator</h1>
      <div className="main">
        <div className="btn--container">
          <button
            className="btn btn--hex"
            onClick={() => setTypeOfColor("hex")}
          >
            Create HEX Color
          </button>
          <button
            className="btn btn--rgb"
            onClick={() => setTypeOfColor("rgb")}
          >
            Create RGB Color
          </button>
          <button
            className="btn btn--hex"
            onClick={
              typeOfColor === "hex"
                ? handleCreateRandomHexColor
                : handleCreateRandomRgbColor
            }
          >
            Generate Random Color
          </button>
        </div>
        <div className="color--title">
          <h3>{typeOfColor} Color</h3>
        </div>
        <div className="color--ref">
          <h2>{color}</h2>
        </div>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
