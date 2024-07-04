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
  notReachedColorDDD?: string;
  reachedColor?: string;
  reachedColorDDD?: string;
  gap?: string;
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
  notReachedColorDDD = cdx_config.colorPrimaryDDD,
  reachedColor = cdx_config.colorPrimaryDiff,
  reachedColorDDD = cdx_config.colorPrimaryDiffDDD,
  gap = cdx_config.gap,
}) => {
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
            borderTopLeftRadius: borderRadius,
            borderBottomLeftRadius: borderRadius,
            backgroundColor: reachedColor,
            boxShadow: `
      ${reachedColorDDD} 0px 0px,
      ${reachedColorDDD} 2px 1px,
      ${reachedColorDDD} 4px 2px,
      ${reachedColorDDD} 6px 3px,
      ${reachedColorDDD} 8px 4px`,
          }}
        ></div>
        <div
          className="notReachedDDDChart1"
          style={{
            width: `${100 - percentage}%`,
            backgroundColor: notReachedColor,
            borderTopRightRadius: borderRadius,
            borderBottomRightRadius: borderRadius,
            boxShadow: `
      ${notReachedColorDDD} 0px 0px,
      ${notReachedColorDDD} 1px 1px,
      ${notReachedColorDDD} 2px 2px,
      ${notReachedColorDDD} 3px 3px,
      ${notReachedColorDDD} 4px 4px`,
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
        </p>
      )}
    </div>
  );
};

export default DDDChart1;
