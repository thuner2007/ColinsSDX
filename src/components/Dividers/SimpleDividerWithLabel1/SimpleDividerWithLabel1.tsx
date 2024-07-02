import React from 'react';
import './SimpleDividerWithLabel1.css';
import { cdx_config } from '../../../cdx_config.ts';

interface SimpleDividerWithLabel1Props {
  width?: string;
  height?: string;
  bgColor?: string;
  color?: string;
  borderRadius?: string;
  marginTop?: string;
  marginBottom?: string;
  boxShadow?: string;
  label?: string;
  labelMargin?: string;
  labelAlign?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
}

const SimpleDividerWithLabel1: React.FC<SimpleDividerWithLabel1Props> = ({
  width = `calc(100vw - ${cdx_config.scrollbarWidth})`,
  height = '1px',
  bgColor = cdx_config.bgColorPrimary,
  borderRadius = cdx_config.borderRadius,
  marginTop = cdx_config.gap,
  marginBottom = cdx_config.gap,
  boxShadow = 'none',
  label = cdx_config.label,
  labelAlign = 'flex-start',
  color = cdx_config.colorSecondary,
  labelMargin = '0 0.5rem',
}) => {
  return (
    <div
      className="mainDivSimpleDividerWithLabel1"
      style={{
        width,
        marginTop,
        marginBottom,
        boxShadow,
      }}
    >
      <h1
        className="labelSimpleDividerWithLabel1"
        style={{ alignSelf: labelAlign, color, margin: labelMargin }}
      >
        {label}
      </h1>
      <hr
        className="hrSimpleDividerWithLabel1"
        style={{
          height: height,
          backgroundColor: bgColor,
          borderRadius: borderRadius,
        }}
      ></hr>
    </div>
  );
};

export default SimpleDividerWithLabel1;
