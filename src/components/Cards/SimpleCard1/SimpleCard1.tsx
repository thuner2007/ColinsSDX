import React from "react";
import "./SimpleCard1.css";
import { cdx_config } from "../../../cdx_config.ts";

interface SimpleCard1Props {
  label?: string;
  text?: string[];
  margin?: string;
  padding?: string;
  bgColor?: string;
  color?: string;
  border?: string;
  borderRadius?: string;
  textFontSize?: string;
  labelFontSize?: string;
  labelFontWeight?: string;
  alignItems?: "center" | "flex-start" | "flex-end";
  maxWidth?: string;
  gap?: string;
  boxShadow?: string;
}

const SimpleCard1: React.FC<SimpleCard1Props> = ({
  label = "label",
  text = [
    "Hello, this </br> is the first paragraph",
    "Hello, this is the second paragraph",
  ],
  margin = cdx_config.margin,
  padding = cdx_config.padding,
  bgColor = cdx_config.bgColorPrimary,
  color = cdx_config.colorPrimary,
  border = cdx_config.borderPrimary,
  borderRadius = cdx_config.borderRadius,
  textFontSize = cdx_config.fontSizeText,
  labelFontSize = cdx_config.fontSizeLabel,
  alignItems = "flex-start",
  gap = cdx_config.gap,
  boxShadow = cdx_config.boxShadow,
  labelFontWeight = cdx_config.labelFontWeight,
}) => {
  return (
    <div
      className="mainDivSimpleCard1"
      style={{
        alignItems: alignItems,
        padding: padding,
        margin: margin,
        backgroundColor: bgColor,
        color: color,
        border: border,
        borderRadius: borderRadius,
        gap: gap,
        boxShadow: boxShadow,
      }}
    >
      <h1
        className="labelSimpleCard1"
        style={{ fontSize: labelFontSize, fontWeight: labelFontWeight }}
      >
        {label}
      </h1>
      {text.map((item, index) => {
        return (
          <p
            key={index}
            className="textSimpleCard1"
            style={{
              fontSize: textFontSize,
            }}
            dangerouslySetInnerHTML={{ __html: item }}
          />
        );
      })}
    </div>
  );
};

export default SimpleCard1;
