import React from "react";
import "./NavBarNormal1.css";

interface Item {
  src: string;
  alt?: string;
  hover?: boolean;
  onclick?: () => void;
}

type JustifyContentOptions = "center" | "space-between";

interface NavBarNormal1Props {
  height?: string;
  bgColor?: string;
  items?: Item[];
  itemSize?: string;
  bgBlur?: number;
  justifyContent?: JustifyContentOptions;
  calcScrollBar?: string;
  borderButtom?: string;
}

const NavBarNormal1: React.FC<NavBarNormal1Props> = ({
  height,
  bgColor,
  items,
  itemSize,
  bgBlur,
  justifyContent,
  calcScrollBar,
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
      className="mainDivNavBarNormal1"
    >
      {items &&
        items.map((item, index) => (
          <img
            alt={item.alt ? item.alt : "item" + index}
            src={item.src}
            key={index}
            style={{
              width: itemSize,
              height: itemSize,
              cursor: item.hover ? "default" : undefined,
            }}
            className="itemNavBarNormal1"
            onClick={item.onclick ? item.onclick : () => {}}
          ></img>
        ))}
    </div>
  );
};

export default NavBarNormal1;
