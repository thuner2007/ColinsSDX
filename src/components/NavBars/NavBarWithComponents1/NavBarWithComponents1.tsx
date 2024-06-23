import React from "react";
import "./NavBarWithComponents1.css";

type JustifyContentOptions = "center" | "space-between";

interface NavBarWithComponents1Props {
  height?: string;
  bgColor?: string;
  itemSize?: string;
  bgBlur?: string;
  justifyContent?: JustifyContentOptions;
  calcScrollBar?: string;
  children?: React.ReactNode;
  borderButtom?: string;
}

const NavBarWithComponents1: React.FC<NavBarWithComponents1Props> = ({
  height,
  bgColor,
  itemSize,
  bgBlur,
  justifyContent,
  calcScrollBar,
  children,
  borderButtom,
}) => {
  return (
    <div
      style={{
        width: `calc(100vw - ${calcScrollBar || "0px"})`,
        height: height || "50px",
        backgroundColor: bgColor || "rgba(117, 83, 187, 0.5)",
        backdropFilter: bgBlur ? `blur(${bgBlur})` : "blur(10px)",
        justifyContent: justifyContent || "space-between",
        borderBottom: borderButtom || "1px solid rgba(117, 83, 187, 0.5)",
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
