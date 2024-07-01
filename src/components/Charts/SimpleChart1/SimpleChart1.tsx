import React from 'react';
import './SimpleChart1.css';
import { cdx_config } from '../../../cdx_config.ts';

interface SimpleChart1Props {
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
}

const SimpleChart1: React.FC<SimpleChart1Props> = ({
  label = cdx_config.label,
  percentage = 33,
  text,
  chartHeight = '20px',
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
  alignItems = 'center',
  justifyContent = 'space-between',
  notReachedColor = cdx_config.colorPrimary,
  reachedColor = cdx_config.colorPrimaryDiff,
  gap,
}) => {
  return (
    <div
      className="mainDivSimpleChart1"
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
      <p style={{ fontSize: labelFontSize }} className="labelSimpleChart1">
        {label || 'Label'}
      </p>
      <div
        className="parentSliderDivSimpleChart1"
        style={{
          backgroundColor: notReachedColor,
          height: chartHeight,
          borderRadius: borderRadius,
        }}
      >
        <div
          className="sliderDivSimpleChart1"
          style={{
            width: `${percentage}%`,
            backgroundColor: reachedColor,
          }}
        ></div>
      </div>
      {text && (
        <p className="textSimpleChart1" style={{ fontSize: textFontSize }}>
          {text}
        </p>
      )}
    </div>
  );
};

export default SimpleChart1;
