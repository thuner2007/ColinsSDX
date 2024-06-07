import React from 'react';
import './VerticalItemListDivWithBorder.css';

interface VerticalItemListDivWithBorderProps {
  children?: React.ReactNode;
  margin?: string;
  padding?: string;
  gap?: string;
  width?: string;
  height?: string;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  borderWidth?: string;
  borderColor?: string;
  borderRadius?: string;
}

const VerticalItemListDivWithBorder: React.FC<
  VerticalItemListDivWithBorderProps
> = ({
  children,
  margin,
  padding,
  gap,
  alignItems,
  justifyContent,
  borderWidth,
  borderColor,
  borderRadius,
  width,
  height,
}) => {
  return (
    <div
      className="mainDivVerticalItemListDivWithBorder"
      style={{
        border: borderWidth
          ? `${borderWidth} solid ${borderColor || 'grey'}`
          : borderColor
          ? `2px solid ${borderColor}`
          : '2px solid grey',
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

export default VerticalItemListDivWithBorder;
