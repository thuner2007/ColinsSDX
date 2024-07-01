import React from "react";
import "./NavBarNormal1.css";
import { cdx_config } from "../../../cdx_config.ts";

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
  itemMargin?: string;
  bgBlur?: number;
  justifyContent?: JustifyContentOptions;
  calcScrollBar?: string;
  borderButtom?: string;
}

const NavBarNormal1: React.FC<NavBarNormal1Props> = ({
  height = "50px",
  bgColor = cdx_config.bgColorPrimary,
  items = [
    {
      src: "https://cwx-icons-web-git-main-thuner2007s-projects.vercel.app/icons/svg/profile_icon/CDX_profile_black_icon1.svg",
      alt: "profile_icon",
    },
    {
      src: "https://cwx-icons-web-git-main-thuner2007s-projects.vercel.app/icons/svg/save_icon/CWX_save_invisibleWithBorder_icon1_4.svg",
      alt: "save_icon",
    },
    {
      src: "https://cwx-icons-web-git-main-thuner2007s-projects.vercel.app/icons/svg/search_icon/CWX_search_invisibleWithBorder_icon1.svg",
      alt: "search_icon",
    },
    {
      src: "https://cwx-icons-web-git-main-thuner2007s-projects.vercel.app/icons/svg/settings_icon/CDX_settings_black_icon1.svg",
      alt: "settings_icon",
    },
  ],
  itemSize = "35px",
  itemMargin = "0rem 2rem",
  bgBlur = 0,
  justifyContent = "space-between",
  calcScrollBar = cdx_config.scrollbarWidth,
  borderButtom = `1px solid ${cdx_config.bgColorPrimary}`,
}) => {
  return (
    <div
      style={{
        width: `calc(100vw - ${calcScrollBar || "0px"})`,
        height: height,
        backgroundColor: bgColor,
        backdropFilter: `blur(${bgBlur})`,
        justifyContent: justifyContent,
        borderBottom: borderButtom,
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
              margin: itemMargin,
            }}
            className="itemNavBarNormal1"
            onClick={item.onclick ? item.onclick : () => {}}
          ></img>
        ))}
    </div>
  );
};

export default NavBarNormal1;
