import React from 'react';
import './NavBarWithComponents1.css';

type JustifyContentOptions = 'center' | 'space-between';

interface NavBarWithComponents1Props {
  height?: string;
  bgColor?: string;
  itemSize?: string;
  disableBorder?: boolean;
  borderColor?: string;
  borderWidth?: string;
  bgBlur?: string;
  justifyContent?: JustifyContentOptions;
  calcScrollBar?: boolean;
  children?: React.ReactNode;
}

const NavBarWithComponents1: React.FC<NavBarWithComponents1Props> = ({
  height,
  bgColor,
  itemSize,
  disableBorder,
  bgBlur,
  justifyContent,
  borderColor,
  borderWidth,
  calcScrollBar,
  children,
}) => {
  return (
    <div
      style={{
        width: calcScrollBar === true ? 'calc(100vw - 10px)' : '100vw',
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
      className="mainDivNavBarWithComponents1"
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <div className="itemNavBarWithComponents1">
            {React.cloneElement(child as React.ReactElement<any>, {
              style: {
                ...child.props.style,
                width: itemSize,
                height: itemSize,
              },
            })}
          </div>
        ) : null
      )}
    </div>
  );
};

export default NavBarWithComponents1;
