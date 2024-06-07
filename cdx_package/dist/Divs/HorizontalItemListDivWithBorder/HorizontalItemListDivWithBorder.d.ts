import React from 'react';
import './HorizontalItemListDivWithBorder.css';
interface HorizontalItemListDivWithBorderProps {
    children?: React.ReactNode;
    margin?: string;
    padding?: string;
    gap?: string;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    borderColor?: string;
    borderWidth?: string;
    borderRadius?: string;
}
declare const HorizontalItemListDivWithBorder: React.FC<HorizontalItemListDivWithBorderProps>;
export default HorizontalItemListDivWithBorder;
