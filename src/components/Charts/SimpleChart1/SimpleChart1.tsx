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
  fontSize?: string;
  margin?: string;
  padding?: string;
  borderWidth?: string;
  borderColor?: string;
  alignItems?: "space-between" | "center" | "flex-start" | "flex-end";
  justifyContent?: "space-between" | "center" | "flex-start" | "flex-end";
  notReachedColor?: string;
  reachtedColor?: string;
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
  fontSize,
  margin,
  padding,
  alignItems,
  justifyContent,
  notReachedColor,
  reachtedColor,
}) => {
  return (
    <div
      className="mainDivSimpleChart1"
      style={{
        height: height ? height : "70px",
        width: width ? width : "500px",
        border: borderWidth
          ? `${borderWidth} solid ${borderColor || "none"}`
          : borderColor
          ? `2px solid ${borderColor}`
          : "2px solid none",
        borderRadius: borderRadius ? borderRadius : "1rem",
        backgroundColor: bgColor ? bgColor : "#7553BB",
        color: color ? color : "white",
        fontSize: fontSize ? fontSize : "1.2rem",
        margin: margin ? margin : "0",
        padding: padding ? padding : "0.8rem",
        alignItems: alignItems ? alignItems : "center",
        justifyContent: justifyContent ? justifyContent : "space-between",
      }}
    >
      <p className="labelSimpleChart1">{label ? label : "Label"}</p>
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
      {text ? text : ""}
    </div>
  );
};

export default SimpleChart1;
