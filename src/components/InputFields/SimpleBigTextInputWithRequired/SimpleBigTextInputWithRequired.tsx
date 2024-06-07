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
  maxLength?: number;
  bgColor?: string;
  color?: string;
  labelAlign?: 'start' | 'center' | 'end';
  overflow?:
    | 'auto'
    | 'hidden'
    | 'visible'
    | 'scroll'
    | 'inherit'
    | 'initial'
    | 'unset';
  onTextChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const SimpleBigTextInputWithRequired: React.FC<
  SimpleBigTextInputWithRequiredProps
> = ({
  showBorder,
  width,
  height,
  placeholder,
  fontSize,
  required,
  label,
  borderRadius,
  hasError,
  errorMessage,
  overflow,
  maxLength,
  labelAlign,
  bgColor,
  color,
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
      className="mainDivSimpleBigTextInputWithRequired"
      style={{ border: showBorder ? `2px solid ${randomBorderColor}` : 'none' }}
    >
      <div
        id="labelDivSimpleBigTextInputWithRequired"
        style={{ justifyContent: labelAlign ? labelAlign : 'start' }}
      >
        {required && (
          <span
            className="mandatorySpanSimpleBigTextInputWithRequired"
            style={{
              color: hasError ? 'red' : 'black',
            }}
          >
            *
          </span>
        )}
        {label && (
          <h2
            className="labelHeaderSimpleBigTextInputWithRequired"
            style={{ color: color ? color : 'black' }}
          >
            {label}
          </h2>
        )}
      </div>

      <textarea
        className="inputSimpleBigTextInputWithRequired"
        style={{
          borderRadius: borderRadius ? borderRadius : '1rem',
          width: width ? width : '88%',
          height: height ? height : '10rem',
          fontSize: fontSize ? fontSize : '1rem',
          overflow: overflow ? overflow : 'auto',
          backgroundColor: bgColor ? bgColor : 'RGBA(117, 83, 187, 0.3)',
          color: color ? color : 'black',
        }}
        placeholder={placeholder ? placeholder : 'Type here...'}
        onChange={onTextChange}
        maxLength={maxLength ? maxLength : 1000}
      />
      <p className="errorMessageSimpleBigTextInputWithRequired">
        {errorMessage}
      </p>
    </div>
  );
};

export default SimpleBigTextInputWithRequired;
