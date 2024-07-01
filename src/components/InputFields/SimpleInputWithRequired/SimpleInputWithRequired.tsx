import React from "react";
import "./SimpleInputWithRequired.css";
import { cdx_config } from "../../../cdx_config.ts";

interface SimpleInputWithRequiredProps {
  label?: string;
  required?: boolean;
  border?: string;
  borderRadius?: string;
  backgroundColor?: string;
  textColor?: string;
  labelFontSize?: string;
  labelColor?: string;
  labelFontWeight?: string;
  textFontSize?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  placeholder?: string;
  placeholderColor?: string;
  disabled?: boolean;
  isResizeable?: boolean;
  focusBorder?: string;
  gap?: string;
}

const SimpleInputWithRequired: React.FC<SimpleInputWithRequiredProps> = ({
  label = cdx_config.label,
  required = false,
  border = cdx_config.borderPrimary,
  borderRadius = cdx_config.borderRadius,
  backgroundColor = cdx_config.bgColorPrimary,
  textColor = cdx_config.colorPrimary,
  labelColor = cdx_config.colorSecondary,
  labelFontSize = cdx_config.fontSizeLabel,
  labelFontWeight = "700",
  textFontSize = cdx_config.fontSizeText,
  padding = cdx_config.padding,
  margin = cdx_config.margin,
  width = "auto",
  height = "auto",
  placeholder = "Type here...",
  placeholderColor = cdx_config.colorPlaceholder,
  disabled = false,
  focusBorder = "none",
  gap = "0.5rem",
}) => {
  return (
    <div
      className="mainDivSimpleInputWithRequired"
      style={{ margin: margin, gap: gap }}
    >
      <label
        className="labelLabelSimpleInputWithRequired"
        style={{
          fontSize: labelFontSize,
          fontWeight: labelFontWeight,
          color: labelColor,
        }}
      >
        {required && (
          <span className="requiredSpanSimpleInputWithRequired">*</span>
        )}
        {label}
      </label>
      <input
        className="textareaSimpleInputWithRequired"
        style={
          {
            border: border,
            borderRadius: borderRadius,
            backgroundColor: backgroundColor,
            color: textColor,
            fontSize: textFontSize,
            padding: padding,
            width: width,
            height: height,
            "--placeholder-color": placeholderColor,
            "--focus-border": focusBorder,
          } as React.CSSProperties
        }
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default SimpleInputWithRequired;
