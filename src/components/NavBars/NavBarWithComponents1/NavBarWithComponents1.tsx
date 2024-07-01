import React from "react";
import "./NavBarWithComponents1.css";
import { cdx_config } from "../../../cdx_config.ts";

type JustifyContentOptions = "center" | "space-between";

interface NavBarWithComponents1Props {
  height?: string;
  bgColor?: string;
  itemSize?: string;
  itemMargin?: string;
  bgBlur?: string;
  justifyContent?: JustifyContentOptions;
  calcScrollBar?: string;
  children?: React.ReactNode;
  borderButtom?: string;
}

const NavBarWithComponents1: React.FC<NavBarWithComponents1Props> = ({
  height = "50px",
  bgColor = cdx_config.bgColorPrimary,
  itemSize = "auto",
  itemMargin = "0rem 2rem",
  bgBlur = 0,
  justifyContent = "space-between",
  calcScrollBar = cdx_config.scrollbarWidth,
  children,
  borderButtom = `1px solid ${cdx_config.bgColorPrimary}`,
}) => {
  return (
    <div
      style={{
        width: `calc(100vw - ${calcScrollBar})`,
        height: height,
        backgroundColor: bgColor,
        backdropFilter: `blur(${bgBlur})`,
        justifyContent: justifyContent,
        borderBottom: borderButtom,
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
                margin: itemMargin,
              },
            })}
          </div>
        ) : null
      )}
    </div>
  );
};

export default NavBarWithComponents1;
