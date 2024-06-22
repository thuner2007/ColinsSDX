import React, { useState } from 'react';
import './SimpleAccordion1.css';

interface Item {
  label?: string;
  text?: string;
}

interface SimpleAccordion1Props {
  items?: Item[];
  width?: string;
  bgColor?: string;
  color?: string;
  borderRadius?: string;
  fontSize?: string;
  padding?: string;
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
}

const SimpleAccordion1: React.FC<SimpleAccordion1Props> = ({
  width,
  bgColor,
  color,
  borderRadius,
  fontSize,
  padding,
  justifyContent,
  alignItems,
  items,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <div
      className="mainDivSimpleAccordion1"
      style={{
        width: width ? width : '200px',
        backgroundColor: bgColor ? bgColor : '#7553BB',
        color: color ? color : 'white',
        borderRadius: borderRadius ? borderRadius : '1rem',
        padding: padding ? padding : '1rem',
      }}
    >
      {items?.map((item, index) => {
        return (
          <div key={index} className="itemSimpleAccordion1">
            <h1
              onClick={() => {
                handleClick(index);
              }}
              className="labelSimpleAccordion1"
            >
              {item.label}
            </h1>

            <p
              className={`textSimpleAccordion1 ${
                expandedIndex === index ? 'expanded' : ''
              }`}
            >
              {item.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SimpleAccordion1;
