import React from 'react';
import './SimpleButton1.css';

interface SimpleButton1Props {
  label?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  boxShadowColor?: string;
  boxShadow?: boolean;
  color?: string;
  fontSize?: string;
  hoverBgColor?: string;
  transformScale?: number;
  transitionTime?: string;
  onClick?: () => void;
}

const SimpleButton1: React.FC<SimpleButton1Props> = ({
  label,
  width,
  height,
  bgColor,
  borderColor,
  borderWidth,
  borderRadius,
  hoverBgColor,
  color,
  boxShadowColor,
  transformScale,
  transitionTime,
  fontSize,
  boxShadow,
  onClick,
}) => {
  return (
    <>
      <button
        className="mainSimpleButton1"
        style={{
          border: borderWidth
            ? `${borderWidth} solid ${borderColor || '#7553BB'}`
            : borderColor
            ? `2px solid ${borderColor}`
            : '2px solid #7553BB',
          borderRadius: borderRadius ? borderRadius : '10px',
          width: width ? width : '200px',
          height: height ? height : '50px',
          backgroundColor: bgColor ? bgColor : '#7553BB',
          color: color ? color : 'white',
          boxShadow: boxShadow ? `0px 0px 10px 1px ${boxShadowColor || '#7553BB'}` : 'none',
          transition: `all ${transitionTime || '0.3s'} ease`,
          fontSize: fontSize ? fontSize : '1.2em',
        }}
        onClick={onClick ? onClick : () => console.log('Button clicked!')}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = `scale(${transformScale || 1.1})`;
          e.currentTarget.style.backgroundColor = hoverBgColor || '#7553BB';
        }}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {label ? label : 'Click me!'}
      </button>
    </>
  );
};

export default SimpleButton1;
