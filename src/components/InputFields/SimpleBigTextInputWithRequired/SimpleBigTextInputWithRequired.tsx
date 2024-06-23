import React from "react";
import "./SimpleBigTextInputWithRequired.css";
import { hover } from "@testing-library/user-event/dist/hover";

interface SimpleBigTextInputWithRequiredProps {
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

const SimpleBigTextInputWithRequired: React.FC<
  SimpleBigTextInputWithRequiredProps
> = ({
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
  isResizeable: isFlexible,
  focusBorder,
}) => {
  return (
    <div className="mainDivSimpleBigTextInputWithRequired">
      <label className="labelLabelSimpleBigTextInputWithRequired">
        {required && (
          <span className="requiredSpanSimpleBigTextInputWithRequired">*</span>
        )}
        {label}
      </label>
      <textarea
        className="textareaSimpleBigTextInputWithRequired"
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
            resize: isFlexible ? "both" : "none",
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

export default SimpleBigTextInputWithRequired;
