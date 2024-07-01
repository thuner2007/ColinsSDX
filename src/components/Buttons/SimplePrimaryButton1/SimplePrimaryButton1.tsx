import React from 'react';
import './SimplePrimaryButton1.css';
import { cdx_config } from '../../../cdx_config.ts';

interface SimplePrimaryButton1Props {
  label?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  color?: string;
  fontSize?: string;
  hoverBgColor?: string;
  transformScale?: number;
  transitionTime?: string;
  border?: string;
  margin?: string;
  padding?: string;
  onClick?: () => void;
  willChange?: boolean;
}

const SimplePrimaryButton1: React.FC<SimplePrimaryButton1Props> = ({
  label = 'Click me!',
  width = 'auto',
  height = 'auto',
  bgColor = cdx_config.bgColorPrimary,
  borderRadius = cdx_config.borderRadius,
  hoverBgColor = '#7553BB',
  color = cdx_config.colorPrimary,
  transformScale = cdx_config.transformScale,
  transitionTime = cdx_config.transitionTime,
  fontSize = cdx_config.fontSizeLabel,
  boxShadow = cdx_config.boxShadow,
  willChange = false,
  border = cdx_config.borderPrimary,
  margin = cdx_config.margin,
  padding = cdx_config.padding,
  onClick,
}) => {
  return (
    <>
      <button
        className="mainSimplePrimaryButton1"
        style={{
          willChange: willChange ? 'transform' : 'auto',
          border: border,
          borderRadius: borderRadius,
          width: width,
          height: height,
          backgroundColor: bgColor,
          color: color,
          boxShadow: boxShadow,
          transition: `all ${transitionTime || '0.3s'} ease`,
          fontSize: fontSize,
          margin: margin,
          padding: padding,
        }}
        onClick={onClick ? onClick : () => console.log('Button clicked!')}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = `scale(${transformScale || 1})`;
          e.currentTarget.style.backgroundColor = hoverBgColor;
        }}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {label}
      </button>
    </>
  );
};

export default SimplePrimaryButton1;
