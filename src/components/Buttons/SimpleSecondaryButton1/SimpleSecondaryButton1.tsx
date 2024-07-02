import React from 'react';
import './SimpleSecondaryButton1.css';
import { cdx_config } from '../../../cdx_config.ts';

interface SimpleSecondaryButton1Props {
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

const SimpleSecondaryButton1: React.FC<SimpleSecondaryButton1Props> = ({
  label = 'Click me!',
  width = 'auto',
  height = 'auto',
  bgColor = cdx_config.bgColorSecondary,
  borderRadius = cdx_config.borderRadius,
  hoverBgColor = 'white',
  color = cdx_config.colorSecondary,
  fontSize = cdx_config.fontSizeLabel,
  boxShadow = cdx_config.boxShadow,
  willChange = false,
  border = cdx_config.borderSecondary,
  margin = cdx_config.margin,
  padding = cdx_config.padding,
  onClick,
}) => {
  return (
    <>
      <button
        className="mainSimpleSecondaryButton1"
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

export default SimpleSecondaryButton1;
