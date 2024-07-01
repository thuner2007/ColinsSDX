import React from 'react';
import './SimpleSecondaryButton1.css';

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
  transformScale?: number;
  transitionTime?: string;
  border?: string;
  margin?: string;
  padding?: string;
  onClick?: () => void;
  willChange?: boolean;
}

const SimpleSecondaryButton1: React.FC<SimpleSecondaryButton1Props> = ({
  label = 'Click me!',
  width = '200px',
  height = '50px',
  bgColor = 'white',
  borderRadius = '1rem',
  hoverBgColor = 'white',
  color = '#7553BB',
  transformScale = 1,
  transitionTime = '0.3s',
  fontSize = '1.5rem',
  boxShadow = 'none',
  willChange = false,
  border = '2px solid #7553BB',
  margin = '0.5rem',
  padding = '0',
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

export default SimpleSecondaryButton1;
