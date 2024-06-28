import "./ColorSelector.scss";

import React, { useState } from "react";

const ColorSelector = ({ colors, selectedColor, onColorSelect }) => {
  return (
    <div className="color-selector">
      <span>Select Color:</span>
      <div className="color-options">
        {colors.map((color, index) => (
          <label key={index} className="color-option">
            <input
              type="radio"
              value={color}
              checked={color === selectedColor}
              onChange={() => onColorSelect(color)}
              className="color-radio"
            />
            <span
              className={`color-display ${
                color === selectedColor ? "selected" : ""
              }`}
              style={{ backgroundColor: color }}
            ></span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
