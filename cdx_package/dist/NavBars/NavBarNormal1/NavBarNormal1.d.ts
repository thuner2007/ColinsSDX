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
declare const NavBarNormal1: React.FC<NavBarNormal1Props>;
export default NavBarNormal1;
