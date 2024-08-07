import React from 'react';
import './SimpleConfirmButton1.css';
import { cdx_config } from '../../../cdx_config.ts';

interface SimpleConfirmButton1Props {
  label?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  color?: string;
  fontSize?: string;
  hoverBgColor?: string;
  border?: string;
  margin?: string;
  padding?: string;
  onClick?: () => void;
  willChange?: boolean;
}

const SimpleConfirmButton1: React.FC<SimpleConfirmButton1Props> = ({
  label = 'Click me!',
  width = 'auto',
  height = 'auto',
  bgColor = cdx_config.colorConfirm,
  borderRadius = cdx_config.borderRadius,
  hoverBgColor = cdx_config.colorConfirm,
  color = cdx_config.colorPrimary,
  fontSize = cdx_config.fontSizeLabel,
  boxShadow = cdx_config.boxShadow,
  willChange = false,
  border = cdx_config.colorConfirm,
  margin = cdx_config.margin,
  padding = cdx_config.padding,
  onClick,
}) => {
  return (
    <>
      <button
        className="mainSimpleConfirmButton1"
        style={{
          willChange: willChange ? 'transform' : 'auto',
          border: border,
          borderRadius: borderRadius,
          width: width,
          height: height,
          backgroundColor: bgColor,
          color: color,
          boxShadow: boxShadow,
          fontSize: fontSize,
          margin: margin,
          padding: padding,
        }}
        onClick={onClick ? onClick : () => console.log('Button clicked!')}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = hoverBgColor;
        }}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {label}
      </button>
    </>
  );
};

export default SimpleConfirmButton1;
