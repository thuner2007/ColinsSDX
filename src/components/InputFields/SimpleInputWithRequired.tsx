import React from 'react';
import './SimpleInputWithRequired.css';

interface SimpleInputWithRequiredProps {
  showBorder?: boolean;
  width?: string;
  placeholder?: string;
  label?: string;
  fontSize?: string;
  borderRadius?: string;
  mandatory?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  onTextChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
{
}

const SimpleInputWithRequired: React.FC<SimpleInputWithRequiredProps> = ({
  showBorder,
  width,
  placeholder,
  fontSize,
  mandatory,
  label,
  borderRadius,
  hasError,
  errorMessage,
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
      className="mandatorySpanSimpleInputWithRequired"
      style={{ border: showBorder ? `2px solid ${randomBorderColor}` : 'none' }}
    >
      {label && <h2 className="labelHeaderSimpleInputWithRequired">{label}</h2>}

      <input
        className="inputSimpleInputWithRequired"
        style={{
          borderRadius: borderRadius ? borderRadius : '1rem',
          width: width ? width : '88%',
          fontSize: fontSize ? fontSize : '1rem',
        }}
        placeholder={placeholder ? placeholder : 'Type here...'}
        onChange={onTextChange}
      />
      {mandatory && (
        <span
          className="mandatorySpanSimpleInputWithRequired"
          style={{
            bottom: label ? '4rem' : '2.2rem',
            right: label ? '-3.8rem' : '-0.6rem',
            color: hasError ? 'red' : 'black',
          }}
        >
          *
        </span>
      )}
      <p
        className={
          mandatory
            ? 'errorMessageSimpleInputWithRequired'
            : 'errorMessageSimpleInputWithRequired2'
        }
      >
        {errorMessage}
      </p>
    </div>
  );
};

export default SimpleInputWithRequired;
