import React from "react";
import "./SimpleChart1.css";

interface SimpleChart1Props {
  label?: string;
  percentage: number;
  text?: string;
  chartHeight?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  borderRadius?: string;
  color?: string;
  labelFontSize?: string;
  textFontSize?: string;
  margin?: string;
  padding?: string;
  borderWidth?: string;
  borderColor?: string;
  alignItems?: "space-between" | "center" | "flex-start" | "flex-end";
  justifyContent?: "space-between" | "center" | "flex-start" | "flex-end";
  notReachedColor?: string;
  reachtedColor?: string;
  gap?: string;
}

const SimpleChart1: React.FC<SimpleChart1Props> = ({
  label,
  percentage,
  text,
  chartHeight,
  width,
  height,
  bgColor,
  borderRadius,
  borderColor,
  borderWidth,
  color,
  labelFontSize,
  textFontSize,
  margin,
  padding,
  alignItems,
  justifyContent,
  notReachedColor,
  reachtedColor,
  gap,
}) => {
  return (
    <div
      className="mainDivSimpleChart1"
      style={{
        gap: gap || "1rem",
        height: height || "auto",
        width: width || "500px",
        border: borderWidth
          ? `${borderWidth} solid ${borderColor || "#7553BB"}`
          : borderColor
          ? `2px solid ${borderColor}`
          : "2px solid #7553BB",
        borderRadius: borderRadius || "1rem",
        backgroundColor: bgColor || "#7553BB",
        color: color || "white",
        margin: margin || "0",
        padding: padding || "0.8rem",
        alignItems: alignItems || "center",
        justifyContent: justifyContent || "space-between",
      }}
    >
      <p
        style={{ fontSize: labelFontSize || "1.5rem" }}
        className="labelSimpleChart1"
      >
        {label || "Label"}
      </p>
      <div
        className="parentSliderDivSimpleChart1"
        style={{
          backgroundColor: notReachedColor ? notReachedColor : "white",
          height: chartHeight ? chartHeight : "20px",
          borderRadius: borderRadius ? borderRadius : "1rem",
        }}
      >
        <div
          className="sliderDivSimpleChart1"
          style={{
            width: `${percentage}%`,
            backgroundColor: reachtedColor ? reachtedColor : "black",
          }}
        ></div>
      </div>
      {text && <p className="textSimpleChart1">{text}</p>}
    </div>
  );
};

export default SimpleChart1;
