import './SimpleVerticalDropdown.css';
import React from 'react';
interface Item {
    alt?: string;
    label?: string;
    onclick?: () => void;
}
interface SimpleVerticalDropdownProps {
    showBorder?: boolean;
    label: string;
    borderRadius?: string;
    unicodeArrowUp?: string;
    unicodeArrowDown?: string;
    items?: Item[];
}
declare const SimpleVerticalDropdown: React.FC<SimpleVerticalDropdownProps>;
export default SimpleVerticalDropdown;
