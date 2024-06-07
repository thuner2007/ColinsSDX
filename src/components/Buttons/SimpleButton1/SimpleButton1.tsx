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
  onClick,
}) => {
  return (
    <>
      <button
        className="mainSimpleButton1"
        style={{
          border: borderWidth
            ? `${borderWidth} solid ${borderColor || 'grey'}`
            : borderColor
            ? `2px solid ${borderColor}`
            : '2px solid grey',
          borderRadius: borderRadius ? borderRadius : '10px',
          width: width ? width : '200px',
          height: height ? height : '50px',
          backgroundColor: bgColor ? bgColor : 'grey',
          color: color ? color : 'white',
          boxShadow: `0px 0px 10px 1px ${boxShadowColor || 'grey'}`,
          transition: `all ${transitionTime || '0.3s'} ease`,
          fontSize: fontSize ? fontSize : '1.2em',
        }}
        onClick={onClick ? onClick : () => console.log('Button clicked!')}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = `scale(${transformScale || 1.1})`;
          e.currentTarget.style.backgroundColor = hoverBgColor || 'grey';
        }}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {label ? label : 'Click me!'}
      </button>
    </>
  );
};

export default SimpleButton1;
