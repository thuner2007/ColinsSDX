import React from 'react';
import './SimpleDivider1.css';

interface SimpleDivider1Props {
  width?: string;
  height?: string;
  color?: string;
  borderRadius?: string;
  marginTop?: string;
  marginBottom?: string;
  boxShadow?: string;
}

const SimpleDivider1: React.FC<SimpleDivider1Props> = ({
  width = '100%',
  height = '1px',
  color = 'gray',
  borderRadius = '1rem',
  marginTop = '1rem',
  marginBottom = '1rem',
  boxShadow = '0px 0px 10px 0px rgba(0,0,0,0.25)',
}) => {
  return (
    <hr
      className="mainDivSimpleDivider1"
      style={{
        width: width,
        height: height,
        backgroundColor: color,
        borderRadius: borderRadius,
        marginTop: marginTop,
        marginBottom: marginBottom,
        boxShadow: boxShadow,
      }}
    ></hr>
  );
};

export default SimpleDivider1;
