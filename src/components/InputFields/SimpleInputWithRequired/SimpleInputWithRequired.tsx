import React from "react";
import "./SimpleInputWithRequired.css";

interface SimpleInputWithRequiredProps {
  label: string;
  required: boolean;
  border?: string;
  borderRadius?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  placeholder?: string;
  placeholderColor?: string;
  disabled?: boolean;
  isResizeable?: boolean;
  focusBorder?: string;
}

const SimpleInputWithRequired: React.FC<SimpleInputWithRequiredProps> = ({
  label,
  required,
  border,
  borderRadius,
  backgroundColor,
  color,
  fontSize,
  padding,
  margin,
  width,
  height,
  placeholder,
  placeholderColor,
  disabled,
  focusBorder,
}) => {
  return (
    <div className="mainDivSimpleInputWithRequired">
      <label className="labelLabelSimpleInputWithRequired">
        {required && (
          <span className="requiredSpanSimpleInputWithRequired">*</span>
        )}
        {label}
      </label>
      <input
        className="textareaSimpleInputWithRequired"
        style={
          {
            border: border || "1px solid #7553BB",
            borderRadius: borderRadius || "1rem",
            backgroundColor: backgroundColor || "#7553BB",
            color: color || "white",
            fontSize: fontSize || "1rem",
            padding: padding || "0.7rem",
            margin: margin || "0",
            width: width || "auto",
            height: height || "auto",
            "--placeholder-color": placeholderColor || "lightgray",
            "--focus-border": focusBorder || "none",
          } as React.CSSProperties
        }
        placeholder={placeholder || "Type here..."}
        disabled={disabled}
      />
    </div>
  );
};

export default SimpleInputWithRequired;
