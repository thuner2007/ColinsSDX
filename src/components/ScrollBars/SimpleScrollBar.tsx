import React from "react";

interface Props {
  color?: string;
  backGroundColor?: string;
  hoverColor?: string;
  width?: string;
  borderRadius?: string;
  backGroundShadow?: string;
}

const SimpleScrollBar: React.FC<Props> = ({
  color,
  backGroundColor,
  width,
  borderRadius,
  backGroundShadow,
  hoverColor,
}) => {
  return (
    <div className="mainDivSimpleScrollBar">
      <style>
        {`
/* width */
::-webkit-scrollbar {
  width: ${width || "15px"};
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: ${backGroundShadow || "none"};
  background: ${backGroundColor || "#f1f1f1"};
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${color || "#7553BB"}; 
  border-radius: ${borderRadius || "1rem"};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${hoverColor || "#7553BB"};
  cursor: pointer; 
`}
      </style>
    </div>
  );
};

export default SimpleScrollBar;
