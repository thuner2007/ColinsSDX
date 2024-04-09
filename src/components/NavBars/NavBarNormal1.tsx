import React from 'react';
import './NavBarNormal1.css';

interface Item {
  src: string;
  alt?: string;
  hover?: boolean;
  onclick?: () => void;
}

type JustifyContentOptions = 'center' | 'space-between';

interface NavBarNormal1Props {
  height?: string;
  bgColor?: string;
  items?: Item[];
  itemSize?: string;
  disableBorder?: boolean;
  borderColor?: string;
  borderWidth?: string;
  bgBlur?: string;
  justifyContent?: JustifyContentOptions;
  calcScrollBar?: boolean;
}

const NavBarNormal1: React.FC<NavBarNormal1Props> = ({
  height,
  bgColor,
  items,
  itemSize,
  disableBorder,
  bgBlur,
  justifyContent,
  borderColor,
  borderWidth,
  calcScrollBar,
}) => {
  return (
    <div
      style={{
        width: calcScrollBar === true ? 'calc(100vw - 15px)' : '100vw',
        height: height,
        backgroundColor: bgColor,
        borderBottom: disableBorder
          ? 'none'
          : borderColor && !borderWidth
          ? '1px solid ' + borderColor
          : !borderColor && borderWidth
          ? borderWidth + ' solid black'
          : borderWidth + ' solid ' + borderColor,
        backdropFilter: bgBlur ? `blur(${bgBlur})` : undefined,
        justifyContent: justifyContent,
      }}
      className="mainDivNavBarNormal1"
    >
      {items &&
        items.map((item, index) => (
          <img
            alt={item.alt ? item.alt : 'item' + index}
            src={item.src}
            key={index}
            style={{
              width: itemSize,
              height: itemSize,
              cursor: item.hover ? 'default' : undefined,
            }}
            className="itemNavBarNormal1"
            onClick={item.onclick ? item.onclick : () => {}}
          ></img>
        ))}
    </div>
  );
};

export default NavBarNormal1;
