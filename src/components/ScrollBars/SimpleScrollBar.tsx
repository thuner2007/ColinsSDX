import React from "react";
import { cdx_config } from "../../cdx_config.ts";

interface Props {
  color?: string;
  backGroundColor?: string;
  hoverColor?: string;
  width?: string;
  borderRadius?: string;
  backGroundShadow?: string;
}

const SimpleScrollBar: React.FC<Props> = ({
  color = cdx_config.bgColorPrimary,
  backGroundColor = cdx_config.colorPlaceholder,
  width = `calc(${cdx_config.scrollbarWidth} - 1px)`,
  borderRadius = cdx_config.borderRadius,
  backGroundShadow = cdx_config.boxShadow,
  hoverColor = cdx_config.bgColorPrimary,
}) => {
  return (
    <div className="mainDivSimpleScrollBar">
      <style>
        {`
/* width */
::-webkit-scrollbar {
  width: ${width};
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: ${backGroundShadow};
  background: ${backGroundColor};
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${color}; 
  border-radius: ${borderRadius};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${hoverColor};
  cursor: pointer; 
`}
      </style>
    </div>
  );
};

export default SimpleScrollBar;
