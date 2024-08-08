import React from 'react';
import './ZoomPrimaryButton1.css';
import { cdx_config } from '../../../cdx_config.ts';

interface ZoomPrimaryButton1Props {
  label?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  color?: string;
  fontSize?: string;
  hoverBgColor?: string;
  border?: string;
  margin?: string;
  padding?: string;
  onClick?: () => void;
  willChange?: boolean;
  animation?: 'zoom-in' | 'zoom-out';
  transitionTime?: string;
  transitionStrength?: number;
}

const ZoomPrimaryButton1: React.FC<ZoomPrimaryButton1Props> = ({
  label = 'Click me!',
  width = 'auto',
  height = 'auto',
  bgColor = cdx_config.bgColorPrimary,
  borderRadius = cdx_config.borderRadius,
  hoverBgColor = '#7553BB',
  color = cdx_config.colorPrimary,
  fontSize = cdx_config.fontSizeLabel,
  boxShadow = cdx_config.boxShadow,
  willChange = false,
  border = cdx_config.borderPrimary,
  margin = cdx_config.margin,
  padding = cdx_config.padding,
  animation = 'zoom-in',
  transitionTime = cdx_config.transitionTime,
  transitionStrength = cdx_config.transformScale,
  onClick,
}) => {
  return (
    <>
      <button
        className="mainZoomPrimaryButton1"
        style={{
          willChange: willChange ? 'transform' : 'auto',
          border: border,
          borderRadius: borderRadius,
          width: width,
          height: height,
          backgroundColor: bgColor,
          color: color,
          boxShadow: boxShadow,
          fontSize: fontSize,
          margin: margin,
          padding: padding,
          transition: `all ${transitionTime}`,
        }}
        onClick={onClick ? onClick : () => console.log('Button clicked!')}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = hoverBgColor;
          switch (animation) {
            case 'zoom-in':
              e.currentTarget.style.transform = `scale(${transitionStrength})`;
              break;
            case 'zoom-out':
              e.currentTarget.style.transform = `scale(${
                1 / transitionStrength
              })`;
              break;
            default:
              break;
          }
        }}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {label}
      </button>
    </>
  );
};

export default ZoomPrimaryButton1;
