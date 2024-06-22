import React from "react";
import "./VerticalItemListDiv.css";

interface VerticalItemListDivProps {
  showBorder?: boolean;
  children?: React.ReactNode;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  gap?: string;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
}

const VerticalItemListDiv: React.FC<VerticalItemListDivProps> = ({
  showBorder,
  children,
  margin,
  padding,
  gap,
  alignItems,
  justifyContent,
  width,
  height,
}) => {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const randomBorderColor = getRandomColor();
  return (
    <div
      className="mainDivVerticalItemListDiv"
      style={{
        border: showBorder ? `2px solid ${randomBorderColor}` : "none",
        margin: margin || "0",
        padding: padding || "1rem",
        gap: gap || "1rem",
        alignItems: alignItems || "center",
        justifyContent: justifyContent || "center",
        height: height || "auto",
        width: width || "auto",
      }}
    >
      {children}
    </div>
  );
};

export default VerticalItemListDiv;
