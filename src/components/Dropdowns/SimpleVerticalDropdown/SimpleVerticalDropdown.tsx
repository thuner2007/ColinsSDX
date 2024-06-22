import "./SimpleVerticalDropdown.css";

import React, { useState } from "react";

interface Item {
  alt?: string;
  label?: string;
  onClick?: () => void;
}
interface SimpleVerticalDropdownProps {
  width?: string;
  height?: string;
  label?: string;
  bgBlur?: string;
  color?: string;
  fontSize?: string;
  borderRadius?: string;
  unicodeArrowUp?: string;
  unicodeArrowDown?: string;
  boxShadow?: string;
  bgColor?: string;
  items?: Item[];
  border?: string;
  margin?: string;
  padding?: string;
}

const SimpleVerticalDropdown: React.FC<SimpleVerticalDropdownProps> = ({
  width,
  height,
  label,
  borderRadius,
  unicodeArrowUp,
  unicodeArrowDown,
  items,
  bgColor,
  color,
  fontSize,
  boxShadow,
  border,
  margin,
  padding,
}) => {
  const [isDropped, setIsDropped] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleBlur = () => {
    setTimeoutId(
      setTimeout(() => {
        setIsDropped(false);
      }, 200)
    );
  };

  const handleFocus = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };

  return (
    <div
      className="mainDivSimpleVerticalDropdown"
      style={{
        width: width || "auto",
        height: height || "auto",
        margin: margin || "0",
      }}
    >
      <button
        className="buttonSimpleVerticalDropdown"
        style={{
          borderRadius: borderRadius || "1rem",
          backgroundColor: bgColor || "#7553BB",
          color: color || "white",
          fontSize: fontSize || "1rem",
          boxShadow: boxShadow || "none",
          border: border || "none",
          padding: padding || "0.5rem 1rem",
        }}
        onClick={() => setIsDropped(!isDropped)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <h1
          className="labelSimpleVerticalDropdown"
          style={{ fontSize: fontSize || "1.2rem" }}
        >
          {label || "label"}
        </h1>
        <p
          className="droppedArrowsSimpleVerticalDropdown"
          style={{ color: color || "white" }}
        >
          {isDropped
            ? unicodeArrowUp
              ? String.fromCodePoint(parseInt(unicodeArrowUp ?? "", 16))
              : "\u{2B9D}"
            : unicodeArrowDown
            ? String.fromCodePoint(parseInt(unicodeArrowDown ?? "", 16))
            : "\u{2B9F}"}
        </p>
      </button>
      {isDropped && (
        <div
          className="droppedDivSimpleVerticalDropdown"
          style={{
            position: "absolute",
            top: "calc(100% + 1rem)",
            left: "0",
            borderRadius: borderRadius || "1rem",
            boxShadow: boxShadow || "none",
            border: border || "none",
          }}
        >
          {items &&
            items.map((item, index) => (
              <>
                <button
                  className="buttonOptionSimpleVerticalDropdown"
                  onClick={item.onClick ? item.onClick : () => {}}
                  style={{
                    backgroundColor: bgColor || "#7553BB",
                    color: color || "white",
                    fontSize: fontSize || "1rem",
                    padding: padding || "0.5rem 1rem",
                  }}
                >
                  {item.label || "Option " + index}
                </button>
                {index !== items.length - 1 && (
                  <div className="buttonOptionBorderSimpleVerticalDropdown"></div>
                )}
              </>
            ))}
        </div>
      )}
    </div>
  );
};

export default SimpleVerticalDropdown;
