import React from "react";
import "./SimpleCheckbox1.css";

interface SimpleCheckbox1Props {
  label?: string;
  text?: string;
  checked?: boolean;
  onChange?: () => void;
  bgColor?: string;
  borderRadius?: string;
  color?: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
  borderWidth?: string;
  borderColor?: string;
  alignItems?: "center" | "flex-start" | "flex-end";
  checkedSymbol?: string;
  checkedSymbolPadding?: string;
}

const SimpleCheckbox1: React.FC<SimpleCheckbox1Props> = ({
  label,
  text,
  checked,
  onChange,
  bgColor,
  borderRadius,
  borderColor,
  borderWidth,
  color,
  fontSize,
  margin,
  padding,
  alignItems,
  checkedSymbol = "✔",
  checkedSymbolPadding,
}) => {
  return (
    <div
      className="mainDivSimpleCheckbox1"
      style={{
        backgroundColor: bgColor || "#7553BB",
        borderRadius: borderRadius || "1rem",
        border: borderWidth
          ? `${borderWidth} solid ${borderColor || "none"}`
          : borderColor
          ? `2px solid ${borderColor}`
          : "2px solid none",
        color: color || "white",
        fontSize: fontSize || "1rem",
        margin: margin || "0",
        padding: padding || "0.8rem",
        alignItems: alignItems || "center",
      }}
    >
      <div className="leftDivSimpleCheckbox1">
        <input
          className="inputSimpleCheckbox1"
          style={
            {
              height: "1.5rem",
              width: "1.5rem",
              border: `2px solid ${bgColor || "white"}`,
              color: color || "white",
              padding: checkedSymbolPadding || "0",
              "--checked-symbol": `"${checkedSymbol}"`,
            } as React.CSSProperties
          }
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
      </div>
      <div className="rightDivSimpleCheckbox1">
        <p className="labelSimpleCheckbox1">{label || "label"}</p>
        <p className="textSimpleCheckbox1">{text}</p>
      </div>
    </div>
  );
};

export default SimpleCheckbox1;
