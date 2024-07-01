import React, { useCallback, useEffect, useRef, useState } from 'react';
import './SimpleAccordion1.css';
import { cdx_config } from '../../../cdx_config.ts';

interface Item {
  label?: string;
  text?: string;
}

interface SimpleAccordion1Props {
  items?: Item[];
  width?: string;
  bgColor?: string;
  color?: string;
  borderRadius?: string;
  labelFontSize?: string;
  textFontSize?: string;
  margin?: string;
  textWidth?: string;
  padding?: string;
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  dynamicHeight?: boolean;
  border?: string;
}

const SimpleAccordion1: React.FC<SimpleAccordion1Props> = ({
  width = '200px',
  bgColor = cdx_config.bgColorPrimary,
  color = cdx_config.colorPrimary,
  borderRadius = cdx_config.borderRadius,
  labelFontSize = cdx_config.fontSizeLabel,
  textFontSize = cdx_config.fontSizeText,
  margin = cdx_config.margin,
  textWidth = '90%',
  padding = cdx_config.padding,
  alignItems = 'flex-start',
  items = [{ label: 'Label', text: 'Text' }],
  dynamicHeight = true,
  border = cdx_config.borderSecondary,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getTextHeight = useCallback(
    (index: number) => {
      const ref = contentRefs.current[index];
      return ref ? `${ref.scrollHeight}px` : '0px';
    },
    [contentRefs]
  );

  const calculateTransitionDuration = (textLength: number) => {
    const minDuration = 0.2; // minimum duration in seconds
    const maxDuration = 1.0; // maximum duration in seconds
    const additionalDuration = textLength * 0.01; // additional duration based on text length
    return `${Math.min(minDuration + additionalDuration, maxDuration)}s`;
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.height =
          expandedIndex === index ? getTextHeight(index) : '0px';
      }
    });
  }, [expandedIndex, getTextHeight]);

  return (
    <div
      className="mainDivSimpleAccordion1"
      style={{
        width: width,
        backgroundColor: bgColor,
        color: color,
        borderRadius: borderRadius,
        padding: padding,
        margin: margin,
        border: border,
      }}
    >
      {items?.map((item, index) => {
        return (
          <div
            key={index}
            className="itemSimpleAccordion1"
            style={{
              alignItems: alignItems,
              width: textWidth,
            }}
          >
            <h1
              onClick={() => {
                handleClick(index);
              }}
              className="labelSimpleAccordion1"
              style={{
                fontSize: labelFontSize,
              }}
            >
              {item.label}
            </h1>

            <p
              ref={(el) => (contentRefs.current[index] = el)}
              className={'textSimpleAccordion1'}
              style={{
                transition: dynamicHeight
                  ? `height ${calculateTransitionDuration(
                      item.text?.length ?? 0
                    )} ease-in-out`
                  : `height 0.2s ease-in-out`,
                fontSize: textFontSize,
              }}
              dangerouslySetInnerHTML={{ __html: item.text ?? '' }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SimpleAccordion1;
