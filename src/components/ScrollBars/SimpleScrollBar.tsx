import React from 'react';

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
}) => {
  return (
    <div className="mainDivSimpleScrollBar">
      <style>
        {`
/* width */
::-webkit-scrollbar {
  width: ${width ? width : '10px'};
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px ${backGroundShadow ? backGroundShadow : 'grey'}; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${color ? color : '#888'}; 
  border-radius: ${borderRadius ? borderRadius : '10px'};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${backGroundColor ? backGroundColor : '#555'}; 
`}
      </style>
    </div>
  );
};

export default SimpleScrollBar;
