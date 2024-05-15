import React from 'react';
import './VerticalItemListDiv.css';

interface VerticalItemListDivProps {
  showBorder?: boolean;
  children?: React.ReactNode;
  margin?: string;
  padding?: string;
  gap?: string;
}

const VerticalItemListDiv: React.FC<VerticalItemListDivProps> = ({
  showBorder,
  children,
  margin,
  padding,
  gap,
}) => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const randomBorderColor = getRandomColor();
  return (
    <div
      className="mainDivVerticalItemListDiv"
      style={{
        border: showBorder ? `2px solid ${randomBorderColor}` : 'none',
        margin: margin ? margin : '0',
        padding: padding ? padding : '1rem',
        gap: gap ? gap : '1rem',
      }}
    >
      {children}
    </div>
  );
};

export default VerticalItemListDiv;
