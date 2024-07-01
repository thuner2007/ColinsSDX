import React from 'react';
import './SimplePrimaryButton1.css';

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
  onClick?: () => void;
  willChange?: boolean;
}

const SimplePrimaryButton1: React.FC<SimplePrimaryButton1Props> = ({
  label = 'Click me!',
  width = '200px',
  height = '50px',
  bgColor = '#7553BB',
  borderRadius = '1rem',
  hoverBgColor = '#7553BB',
  color = 'white',
  transformScale = 1,
  transitionTime = '0.3s',
  fontSize = '1.5rem',
  boxShadow = 'none',
  willChange = false,
  border = '1px solid #7553BB',
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
