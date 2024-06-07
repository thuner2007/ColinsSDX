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
  maxLength?: number;
  labelAlign?: 'start' | 'center' | 'end';
  onTextChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SimpleInputWithRequired: React.FC<SimpleInputWithRequiredProps> = ({
  showBorder,
  width,
  placeholder,
  fontSize,
  required,
  label,
  borderRadius,
  hasError,
  errorMessage,
  maxLength,
  labelAlign,
  onTextChange,
}) => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const randomBorderColor = getRandomColor();
  return (
    <div
      className="mainDivSimpleInputWithRequired"
      style={{ border: showBorder ? `2px solid ${randomBorderColor}` : 'none' }}
    >
      <div
        id="labelDivSimpleInputWithRequired"
        style={{ justifyContent: labelAlign ? labelAlign : 'start' }}
      >
        {required && (
          <span
            className="mandatorySpanSimpleInputWithRequired"
            style={{
              color: hasError ? 'red' : 'black',
            }}
          >
            *
          </span>
        )}
        {label && (
          <h2 className="labelHeaderSimpleInputWithRequired">{label}</h2>
        )}
      </div>

      <input
        className="inputSimpleInputWithRequired"
        style={{
          borderRadius: borderRadius ? borderRadius : '1rem',
          width: width ? width : '88%',
          fontSize: fontSize ? fontSize : '1rem',
        }}
        placeholder={placeholder ? placeholder : 'Type here...'}
        onChange={onTextChange}
        maxLength={maxLength ? maxLength : 1000}
      />
      <p className="errorMessageSimpleInputWithRequired">{errorMessage}</p>
    </div>
  );
};

export default SimpleInputWithRequired;
