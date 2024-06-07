import React from 'react';
import './VerticalItemListDivWithBorder.css';
interface VerticalItemListDivWithBorderProps {
    children?: React.ReactNode;
    margin?: string;
    padding?: string;
    gap?: string;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    borderWidth?: string;
    borderColor?: string;
    borderRadius?: string;
}
declare const VerticalItemListDivWithBorder: React.FC<VerticalItemListDivWithBorderProps>;
export default VerticalItemListDivWithBorder;
