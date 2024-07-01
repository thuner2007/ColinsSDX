import React from 'react';
import './HtmlSimpleBackground1.css';

interface HtmlSimpleBackground1Props {
  bgColor?: string;
}

const HtmlSimpleBackground1: React.FC<HtmlSimpleBackground1Props> = ({
  bgColor = 'rgba(117, 83, 187, 0.5)',
}) => {
  return (
    <div
      className="mainDivHtmlSimpleBackground1"
      style={
        {
          '--HtmlSimpleBackground1_backgroundColor': bgColor,
        } as React.CSSProperties
      }
    ></div>
  );
};

export default HtmlSimpleBackground1;
