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
      {label && (
        <h2
          className="labelHeaderSimpleBigTextInputWithRequired"
          style={{ marginLeft: required ? '0.5rem' : '0' }}
        >
          {label}
        </h2>
      )}

      <textarea
        className="inputSimpleBigTextInputWithRequired"
        style={{
          borderRadius: borderRadius ? borderRadius : '1rem',
          width: width ? width : '88%',
          height: height ? height : '10rem',
          fontSize: fontSize ? fontSize : '1rem',
          overflow: overflow ? overflow : 'auto',
        }}
        placeholder={placeholder ? placeholder : 'Type here...'}
        onChange={onTextChange}
      />
      {required && (
        <span
          className="mandatorySpanSimpleBigTextInputWithRequired"
          style={{
            bottom: label ? '4rem' : '2.2rem',
            right: label ? '0rem' : '-0.6rem',
            color: hasError ? 'red' : 'black',
          }}
        >
          *
        </span>
      )}
      <p
        className={
          required
            ? 'errorMessageSimpleBigTextInputWithRequired'
            : 'errorMessageSimpleBigTextInputWithRequired2'
        }
      >
        {errorMessage}
      </p>
    </div>
  );
};

export default SimpleBigTextInputWithRequired;
