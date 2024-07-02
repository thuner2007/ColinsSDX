import React, { useState } from 'react';
import './DreiDPrimaryButton1.css';
import { cdx_config } from '../../../cdx_config.ts';

interface DreiDPrimaryButton1Props {
  label?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  borderRadius?: string;
  color?: string;
  fontSize?: string;
  border?: string;
  margin?: string;
  padding?: string;
  onClick?: () => void;
  willChange?: boolean;
  transitionTime?: string;
  DDDcolor?: string;
  boxShadow?: string;
}

const DreiDPrimaryButton1: React.FC<DreiDPrimaryButton1Props> = ({
  label = 'Click me!',
  width = 'auto',
  height = 'auto',
  bgColor = cdx_config.bgColorPrimary,
  borderRadius = cdx_config.borderRadius,
  color = cdx_config.colorPrimary,
  fontSize = cdx_config.fontSizeLabel,
  willChange = false,
  border = cdx_config.borderPrimary,
  margin = cdx_config.margin,
  padding = cdx_config.padding,
  transitionTime = cdx_config.transitionTime,
  DDDcolor = cdx_config.DDDcolor,
  boxShadow = '0px 8px 10px 0px rgba(0, 0, 0, 0.7)',
  onClick,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <button
        className="mainDreiDPrimaryButton1"
        style={{
          willChange: willChange ? 'transform' : 'auto',
          border: border,
          borderRadius: borderRadius,
          width: width,
          height: height,
          backgroundColor: bgColor,
          color: color,
          fontSize: fontSize,
          margin: margin,
          padding: padding,
          transition: `all ${transitionTime}`,
          boxShadow: !isClicked
            ? `0px 8px 0 ${DDDcolor}, ${boxShadow}`
            : 'none',
          transform: isClicked ? 'translateY(4px)' : 'none',
        }}
        onClick={
          onClick ? onClick : () => console.log('You clicked the button!')
        }
        onMouseDown={() => {
          setIsClicked(true);
        }}
        onMouseUp={() => {
          setIsClicked(false);
        }}
        onMouseLeave={() => {
          setIsClicked(false);
        }}
      >
        {label}
      </button>
    </>
  );
};

export default DreiDPrimaryButton1;
