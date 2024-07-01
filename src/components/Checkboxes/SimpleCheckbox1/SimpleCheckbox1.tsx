import React, { useEffect, useRef, useState } from "react";
import "./SimpleCheckbox1.css";
import { cdx_config } from "../../../cdx_config.ts";

interface SimpleCheckbox1Props {
  label?: string;
  text?: string;
  checked?: boolean;
  onChange?: () => void;
  bgColor?: string;
  borderRadius?: string;
  color?: string;
  labelFontSize?: string;
  textFontSize?: string;
  margin?: string;
  padding?: string;
  alignItems?: "center" | "flex-start" | "flex-end";
  checkedSymbol?: string;
  checkedSymbolPadding?: string;
  border?: string;
  gap?: string;
  labelFontWeight?: string;
}

const SimpleCheckbox1: React.FC<SimpleCheckbox1Props> = ({
  label = cdx_config.label,
  text,
  checked,
  onChange,
  bgColor = cdx_config.bgColorPrimary,
  borderRadius = cdx_config.borderRadius,
  color = cdx_config.colorPrimary,
  labelFontSize = cdx_config.fontSizeLabel,
  textFontSize = cdx_config.fontSizeText,
  margin = cdx_config.margin,
  padding = cdx_config.padding,
  alignItems = "center",
  checkedSymbol = "✔",
  checkedSymbolPadding = "0.2rem",
  border = cdx_config.borderPrimary,
  gap = cdx_config.gap,
  labelFontWeight = cdx_config.labelFontWeight,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (elementRef.current) {
      setHeight(elementRef.current.clientHeight);
    }
  }, []);
  return (
    <div
      ref={elementRef}
      className="mainDivSimpleCheckbox1"
      style={{
        backgroundColor: bgColor,
        borderRadius: borderRadius,
        border: border,
        color: color,
        fontSize: labelFontSize,
        margin: margin,
        padding: padding,
        alignItems: alignItems,
        gap: gap,
      }}
    >
      <div className="leftDivSimpleCheckbox1">
        <input
          className="inputSimpleCheckbox1"
          style={
            {
              height: height / 2.2,
              width: height / 2.2,
              border: `2px solid ${color}`,
              color: color,
              padding: checkedSymbolPadding,
              "--checked-symbol": `"${checkedSymbol}"`,
            } as React.CSSProperties
          }
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
      </div>
      <div className="rightDivSimpleCheckbox1">
        <p
          className="labelSimpleCheckbox1"
          style={{ fontWeight: labelFontWeight }}
        >
          {label}
        </p>
        <p className="textSimpleCheckbox1" style={{ fontSize: textFontSize }}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default SimpleCheckbox1;
