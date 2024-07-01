import { cdx_config } from "../../../cdx_config.ts";
import "./SimpleVerticalDropdown.css";

import React, { useState } from "react";

interface Item {
  alt?: string;
  label?: string;
  onClick?: () => void;
}
interface SimpleVerticalDropdownProps {
  width?: string;
  height?: string;
  label?: string;
  bgBlur?: string;
  color?: string;
  labelFontSize?: string;
  textFontSize?: string;
  borderRadius?: string;
  unicodeArrowUp?: string;
  unicodeArrowDown?: string;
  boxShadow?: string;
  bgColor?: string;
  items?: Item[];
  border?: string;
  margin?: string;
  padding?: string;
  labelFontWeight?: string;
}

const SimpleVerticalDropdown: React.FC<SimpleVerticalDropdownProps> = ({
  width = "auto",
  height = "auto",
  label = cdx_config.label,
  borderRadius = cdx_config.borderRadius,
  unicodeArrowUp,
  unicodeArrowDown,
  items = [{ label: "Option 1" }, { label: "Option 2" }, { label: "Option 3" }],
  bgColor = cdx_config.bgColorPrimary,
  color = cdx_config.colorPrimary,
  labelFontSize = cdx_config.fontSizeLabel,
  textFontSize = cdx_config.fontSizeText,
  boxShadow = cdx_config.boxShadow,
  border = cdx_config.borderPrimary,
  margin = cdx_config.margin,
  padding = cdx_config.padding,
  labelFontWeight = cdx_config.labelFontWeight,
}) => {
  const [isDropped, setIsDropped] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleBlur = () => {
    setTimeoutId(
      setTimeout(() => {
        setIsDropped(false);
      }, 200)
    );
  };

  const handleFocus = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };

  return (
    <div
      className="mainDivSimpleVerticalDropdown"
      style={{
        width: width,
        height: height,
        margin: margin,
      }}
    >
      <button
        className="buttonSimpleVerticalDropdown"
        style={{
          borderRadius: borderRadius,
          backgroundColor: bgColor,
          color: color,
          boxShadow: boxShadow,
          border: border,
          padding: padding,
        }}
        onClick={() => setIsDropped(!isDropped)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <h1
          className="labelSimpleVerticalDropdown"
          style={{ fontSize: labelFontSize, fontWeight: labelFontWeight }}
        >
          {label}
        </h1>
        <p
          className="droppedArrowsSimpleVerticalDropdown"
          style={{ color: color, fontSize: labelFontSize }}
        >
          {isDropped
            ? unicodeArrowUp
              ? String.fromCodePoint(parseInt(unicodeArrowUp ?? "", 16))
              : "\u{2B9D}"
            : unicodeArrowDown
            ? String.fromCodePoint(parseInt(unicodeArrowDown ?? "", 16))
            : "\u{2B9F}"}
        </p>
      </button>
      {isDropped && (
        <div
          className="droppedDivSimpleVerticalDropdown"
          style={{
            position: "absolute",
            top: "calc(100% + 1rem)",
            left: "0",
            borderRadius: borderRadius,
            boxShadow: boxShadow,
            border: border,
          }}
        >
          {items &&
            items.map((item, index) => (
              <>
                <button
                  className="buttonOptionSimpleVerticalDropdown"
                  onClick={item.onClick ? item.onClick : () => {}}
                  style={{
                    backgroundColor: bgColor,
                    color: color,
                    fontSize: textFontSize,
                    padding: padding,
                  }}
                >
                  {item.label || "Option " + index}
                </button>
                {index !== items.length - 1 && (
                  <div className="buttonOptionBorderSimpleVerticalDropdown"></div>
                )}
              </>
            ))}
        </div>
      )}
    </div>
  );
};

export default SimpleVerticalDropdown;
