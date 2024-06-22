import React from "react";
import "./SimpleButton1.css";

interface SimpleButton1Props {
  label?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  boxShadow?: string;
  color?: string;
  fontSize?: string;
  hoverBgColor?: string;
  transformScale?: number;
  transitionTime?: string;
  onClick?: () => void;
  willChange?: boolean;
}

const SimpleButton1: React.FC<SimpleButton1Props> = ({
  label,
  width,
  height,
  bgColor,
  borderColor,
  borderWidth,
  borderRadius,
  hoverBgColor,
  color,
  transformScale,
  transitionTime,
  fontSize,
  boxShadow,
  willChange,
  onClick,
}) => {
  return (
    <>
      <button
        className="mainSimpleButton1"
        style={{
          willChange: willChange ? "transform" : "auto",
          border: borderWidth
            ? `${borderWidth} solid ${borderColor || "#7553BB"}`
            : borderColor
            ? `2px solid ${borderColor}`
            : "2px solid #7553BB",
          borderRadius: borderRadius || "1rem",
          width: width || "200px",
          height: height || "50px",
          backgroundColor: bgColor || "#7553BB",
          color: color || "white",
          boxShadow: boxShadow || "none",
          transition: `all ${transitionTime || "0.3s"} ease`,
          fontSize: fontSize ? fontSize : "1.5rem",
        }}
        onClick={onClick ? onClick : () => console.log("Button clicked!")}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = `scale(${transformScale || 1})`;
          e.currentTarget.style.backgroundColor = hoverBgColor || "#7553BB";
        }}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {label ? label : "Click me!"}
      </button>
    </>
  );
};

export default SimpleButton1;
