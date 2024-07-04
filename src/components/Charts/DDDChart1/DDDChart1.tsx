import React from 'react';
import './DDDChart1.css';
import { cdx_config } from '../../../cdx_config.ts';

interface DDDChart1Props {
  label?: string;
  percentage: number;
  text?: string;
  chartHeight?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  borderRadius?: string;
  color?: string;
  labelFontSize?: string;
  textFontSize?: string;
  margin?: string;
  padding?: string;
  border?: string;
  alignItems?: 'space-between' | 'center' | 'flex-start' | 'flex-end';
  justifyContent?: 'space-between' | 'center' | 'flex-start' | 'flex-end';
  notReachedColor?: string;
  reachedColor?: string;
  gap?: string;
  DDDcolor: string;
}

const DDDChart1: React.FC<DDDChart1Props> = ({
  label = cdx_config.label,
  percentage = 33,
  text,
  chartHeight = '10px',
  width = '500px',
  height = 'auto',
  bgColor = cdx_config.bgColorPrimary,
  borderRadius = cdx_config.borderRadius,
  border = cdx_config.borderPrimary,
  color = cdx_config.colorPrimary,
  labelFontSize = cdx_config.fontSizeLabel,
  textFontSize = cdx_config.fontSizeText,
  margin = cdx_config.margin,
  padding = cdx_config.padding,
  alignItems = 'flex-start',
  justifyContent = 'space-between',
  notReachedColor = cdx_config.colorPrimary,
  reachedColor = cdx_config.colorPrimaryDiff,
  gap = cdx_config.gap,
  DDDcolor = cdx_config.DDDcolor,
}) => {
  const adjustColor = (colorStr) => {
    // Convert hex color to RGB
    let r = parseInt(colorStr.slice(1, 3), 16);
    let g = parseInt(colorStr.slice(3, 5), 16);
    let b = parseInt(colorStr.slice(5, 7), 16);

    if (r > 230 || g > 230 || b > 230) {
      // Darken the color by reducing RGB values by 20%
      r = Math.max(0, Math.floor(r * 0.8));
      g = Math.max(0, Math.floor(g * 0.8));
      b = Math.max(0, Math.floor(b * 0.8));
    } else {
      // Lighten the color by increasing RGB values by 20%
      r = Math.min(255, Math.floor(r * 1.2));
      g = Math.min(255, Math.floor(g * 1.2));
      b = Math.min(255, Math.floor(b * 1.2));
    }

    // Convert RGB back to hex and ensure two characters
    const toHex = (value) => {
      const hex = value.toString(16).toUpperCase();
      return hex.length === 1 ? '0' + hex : hex;
    };

    const adjustedHex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

    return adjustedHex;
  };
  return (
    <div
      className="mainDivDDDChart1"
      style={{
        gap: gap,
        height: height,
        width: width,
        border: border,
        borderRadius: borderRadius,
        backgroundColor: bgColor,
        color: color,
        margin: margin,
        padding: padding,
        alignItems: alignItems,
        justifyContent: justifyContent,
      }}
    >
      <p style={{ fontSize: labelFontSize }} className="labelDDDChart1">
        {label || 'Label'}
      </p>
      <div
        className="parentSliderDivDDDChart1"
        style={{ borderRadius, height: chartHeight }}
      >
        <div
          className="reachedDDDChart1"
          style={{
            width: `${percentage}%`,
            backgroundColor: reachedColor,
            boxShadow: `0px 8px 0px ${adjustColor(reachedColor)}`,
          }}
        ></div>
        <div
          className="notReachedDDDChart1"
          style={{
            width: `${100 - percentage}%`,
            backgroundColor: notReachedColor,
            boxShadow: `0px 6px 0px ${adjustColor(notReachedColor)}`,
          }}
        ></div>
      </div>
      {text && (
        <p
          className="textDDDChart1"
          style={{
            fontSize: textFontSize,
          }}
        >
          {text}
          {adjustColor(reachedColor)}
          {adjustColor(notReachedColor)}
        </p>
      )}
    </div>
  );
};

export default DDDChart1;
