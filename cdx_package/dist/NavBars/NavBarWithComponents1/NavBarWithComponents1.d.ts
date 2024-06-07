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
declare const NavBarWithComponents1: React.FC<NavBarWithComponents1Props>;
export default NavBarWithComponents1;
