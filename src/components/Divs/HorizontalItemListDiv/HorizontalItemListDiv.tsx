import React from 'react';
import './HorizontalItemListDiv.css';

interface HorizontalItemListDivProps {
  showBorder?: boolean;
  children?: React.ReactNode;
  margin?: string;
  width?: string;
  height?: string;
  padding?: string;
  gap?: string;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}

const HorizontalItemListDiv: React.FC<HorizontalItemListDivProps> = ({
  showBorder,
  children,
  margin,
  padding,
  gap,
  alignItems,
  justifyContent,
  height,
  width,
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
      className="mainDivHorizontalItemListDiv"
      style={{
        border: showBorder ? `2px solid ${randomBorderColor}` : 'none',
        margin: margin ? margin : '0',
        padding: padding ? padding : '1rem',
        gap: gap ? gap : '1rem',
        alignItems: alignItems ? alignItems : 'center',
        justifyContent: justifyContent ? justifyContent : 'center',
        height: height ? height : 'auto',
        width: width ? width : 'auto',
      }}
    >
      {children}
    </div>
  );
};

export default HorizontalItemListDiv;
