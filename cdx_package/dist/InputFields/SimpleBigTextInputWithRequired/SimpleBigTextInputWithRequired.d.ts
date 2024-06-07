import React from 'react';
import './SimpleBigTextInputWithRequired.css';
interface SimpleBigTextInputWithRequiredProps {
    showBorder?: boolean;
    width?: string;
    height?: string;
    placeholder?: string;
    label?: string;
    fontSize?: string;
    borderRadius?: string;
    required?: boolean;
    hasError?: boolean;
    errorMessage?: string;
    overflow?: 'auto' | 'hidden' | 'visible' | 'scroll' | 'inherit' | 'initial' | 'unset';
    onTextChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
declare const SimpleBigTextInputWithRequired: React.FC<SimpleBigTextInputWithRequiredProps>;
export default SimpleBigTextInputWithRequired;
