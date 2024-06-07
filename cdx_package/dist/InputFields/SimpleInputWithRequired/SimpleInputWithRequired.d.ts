import React from 'react';
import './SimpleInputWithRequired.css';
interface SimpleInputWithRequiredProps {
    showBorder?: boolean;
    width?: string;
    placeholder?: string;
    label?: string;
    fontSize?: string;
    borderRadius?: string;
    required?: boolean;
    hasError?: boolean;
    errorMessage?: string;
    onTextChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const SimpleInputWithRequired: React.FC<SimpleInputWithRequiredProps>;
export default SimpleInputWithRequired;
