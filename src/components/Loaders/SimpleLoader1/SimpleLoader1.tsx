import React from "react";
import "./SimpleLoader1.css";
import { cdx_config } from "../../../cdx_config.ts";

interface SimpleLoader1Prop {
  color?: string;
  size?: number;
  width?: number;
}

const SimpleLoader1: React.FC<SimpleLoader1Prop> = ({
  color = cdx_config.bgColorPrimary,
  size = 100,
  width = 4,
}) => {
  return (
    <div
      className="mainDivSimpleLoader1"
      style={{
        boxShadow: `0 ${width}px 0 ${color} inset`,
        width: size + "px",
        height: size + "px",
      }}
    ></div>
  );
};

export default SimpleLoader1;
