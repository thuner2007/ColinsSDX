import React from 'react';
import './HorizontalItemListDiv.css';
interface HorizontalItemListDivProps {
    showBorder?: boolean;
    children?: React.ReactNode;
    margin?: string;
    padding?: string;
    gap?: string;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}
declare const HorizontalItemListDiv: React.FC<HorizontalItemListDivProps>;
export default HorizontalItemListDiv;
