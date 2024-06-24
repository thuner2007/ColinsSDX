import React from 'react';
import './SimpleCard1.css';

interface SimpleCard1Props {
  label?: string;
  text?: string[];
  margin?: string;
  padding?: string;
  bgColor?: string;
  color?: string;
  border?: string;
  borderRadius?: string;
  fontSize?: string;
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  maxWidth?: string;
  gap?: string;
  boxShadow?: string;
}

const SimpleCard1: React.FC<SimpleCard1Props> = ({
  label = 'label',
  text = [
    'Hello, this </br> is the first paragraph',
    'Hello, this is the second paragraph',
  ],
  margin = '0px',
  padding = '1rem',
  bgColor = '#7553BB',
  color = 'white',
  border = '1px solid #7553BB',
  borderRadius = '1rem',
  fontSize = '1.2rem',
  alignItems = 'flex-start',
  maxWidth = '300px',
  gap = '1.5rem',
  boxShadow = 'none',
}) => {
  return (
    <div
      className="mainDivSimpleCard1"
      style={{
        alignItems: alignItems,
        padding: padding,
        margin: margin,
        backgroundColor: bgColor,
        color: color,
        border: border,
        borderRadius: borderRadius,
        maxWidth: maxWidth,
        gap: gap,
        boxShadow: boxShadow,
      }}
    >
      <h1 className="labelSimpleCard1">{label}</h1>
      {text.map((item, index) => {
        return (
          <p
            key={index}
            className="textSimpleCard1"
            style={{
              fontSize: fontSize,
            }}
            dangerouslySetInnerHTML={{ __html: item }}
          />
        );
      })}
    </div>
  );
};

export default SimpleCard1;
