import { useState } from "react";
import React from "react";

export function Color() {
  const [color, setColor] = useState([255, 0, 0]);
  const [similar, setSimilar] = useState(false);

  const toggleSimilar = () => {
    setSimilar(!similar);
  };

  function rgbColor() {
    return `rgb(${color.join(",")})`;
  }
  function hexColor() {
    return "#" + color.map((n) => n.toString(16).padStart(2, "0")).join("");
  }

  function setRandomColor() {
    let colorNew: number[];
    if (similar) {
      colorNew = color.map((n) =>
        Math.max(0, Math.min(255, n + Math.floor(Math.random() * 51) - 25)),
      );
    } else {
      colorNew = [0, 0, 0].map((_) => Math.floor(Math.random() * 255));
    }
    setColor(colorNew);
  }

  return (
    <>
      <button onClick={setRandomColor} style={{ display: "inline-block" }}>
        Random color
      </button>
      <label>
        <input
          type="checkbox"
          checked={similar}
          onChange={toggleSimilar}
        ></input>
        Use similar color
      </label>
      <div style={{ backgroundColor: rgbColor() }}>
        {" "}
        {rgbColor()} &mdash; {hexColor()}{" "}
      </div>
    </>
  );
}
