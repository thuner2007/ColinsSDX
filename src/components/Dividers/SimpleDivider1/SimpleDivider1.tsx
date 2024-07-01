import React from "react";
import "./SimpleDivider1.css";
import { cdx_config } from "../../../cdx_config.ts";

interface SimpleDivider1Props {
  width?: string;
  height?: string;
  color?: string;
  borderRadius?: string;
  marginTop?: string;
  marginBottom?: string;
  boxShadow?: string;
}

const SimpleDivider1: React.FC<SimpleDivider1Props> = ({
  width = `calc(100vw - ${cdx_config.scrollbarWidth})`,
  height = "1px",
  color = cdx_config.colorSecondary,
  borderRadius = cdx_config.borderRadius,
  marginTop = cdx_config.gap,
  marginBottom = cdx_config.gap,
  boxShadow = "none",
}) => {
  return (
    <hr
      className="mainDivSimpleDivider1"
      style={{
        width: width,
        height: height,
        backgroundColor: color,
        borderRadius: borderRadius,
        marginTop: marginTop,
        marginBottom: marginBottom,
        boxShadow: boxShadow,
      }}
    ></hr>
  );
};

export default SimpleDivider1;
