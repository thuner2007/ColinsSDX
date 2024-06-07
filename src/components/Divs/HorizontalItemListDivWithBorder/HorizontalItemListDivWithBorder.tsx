import React from 'react';
import './HorizontalItemListDivWithBorder.css';

interface HorizontalItemListDivWithBorderProps {
  children?: React.ReactNode;
  margin?: string;
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
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  height?: string;
  width?: string;
}

const HorizontalItemListDivWithBorder: React.FC<
  HorizontalItemListDivWithBorderProps
> = ({
  children,
  margin,
  padding,
  gap,
  alignItems,
  justifyContent,
  borderColor,
  borderWidth,
  borderRadius,
  height,
  width,
}) => {
  return (
    <div
      className="mainDivHorizontalItemListDivWithBorder"
      style={{
        border: borderWidth
          ? `${borderWidth} solid ${borderColor || 'black'}`
          : borderColor
          ? `2px solid ${borderColor}`
          : '2px solid black',
        borderRadius: borderRadius ? borderRadius : '10px',
        margin: margin ? margin : '1rem',
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

export default HorizontalItemListDivWithBorder;
