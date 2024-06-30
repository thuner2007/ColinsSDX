import React from "react";
import "./SimpleLoader1.css";

interface SimpleLoader1Prop {
  color?: string;
  size?: number;
  width?: number;
}

const SimpleLoader1: React.FC<SimpleLoader1Prop> = ({
  color,
  size = 100,
  width = 4,
}) => {
  return (
    <div
      className="mainDivSimpleLoader1"
      style={{
        boxShadow: `0 ${width}px 0 ${color || "black"} inset`,
        width: size + "px",
        height: size + "px",
      }}
    ></div>
  );
};

export default SimpleLoader1;
