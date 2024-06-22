import React, { useCallback, useEffect, useRef, useState } from "react";
import "./SimpleAccordion1.css";

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
  fontSize?: string;
  padding?: string;
  alignItems?: "center" | "flex-start" | "flex-end" | "space-between";
  dynamicHeight?: boolean;
}

const SimpleAccordion1: React.FC<SimpleAccordion1Props> = ({
  width,
  bgColor,
  color,
  borderRadius,
  fontSize,
  padding,
  alignItems,
  items,
  dynamicHeight,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getTextHeight = useCallback(
    (index: number) => {
      const ref = contentRefs.current[index];
      return ref ? `${ref.scrollHeight}px` : "0px";
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
          expandedIndex === index ? getTextHeight(index) : "0px";
      }
    });
  }, [expandedIndex, getTextHeight]);

  return (
    <div
      className="mainDivSimpleAccordion1"
      style={{
        width: width ? width : "200px",
        backgroundColor: bgColor ? bgColor : "#7553BB",
        color: color ? color : "white",
        borderRadius: borderRadius ? borderRadius : "1rem",
        padding: padding ? padding : "1rem",
      }}
    >
      {items?.map((item, index) => {
        return (
          <div
            key={index}
            className="itemSimpleAccordion1"
            style={{ alignItems: alignItems ? alignItems : "flex-start" }}
          >
            <h1
              onClick={() => {
                handleClick(index);
              }}
              className="labelSimpleAccordion1"
            >
              {item.label}
            </h1>

            <p
              ref={(el) => (contentRefs.current[index] = el)}
              className={"textSimpleAccordion1"}
              style={{
                transition: dynamicHeight
                  ? `height ${calculateTransitionDuration(
                      item.text?.length ?? 0
                    )} ease-in-out`
                  : `height 0.2s ease-in-out`,
                fontSize: fontSize ? fontSize : "1rem",
              }}
              dangerouslySetInnerHTML={{ __html: item.text ?? "" }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SimpleAccordion1;
