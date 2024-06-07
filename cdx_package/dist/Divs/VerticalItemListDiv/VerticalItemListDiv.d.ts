import React from 'react';
import './VerticalItemListDiv.css';
interface VerticalItemListDivProps {
    showBorder?: boolean;
    children?: React.ReactNode;
    margin?: string;
    padding?: string;
    gap?: string;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}
declare const VerticalItemListDiv: React.FC<VerticalItemListDivProps>;
export default VerticalItemListDiv;
