import './SimpleVerticalDropdown.css';

import React, { useState } from 'react';

interface Item {
  alt?: string;
  label?: string;
  onclick?: () => void;
}
interface SimpleVerticalDropdownProps {
  showBorder?: boolean;
  label: string;
  bgBlur?: string;
  color?: string;
  fontSize?: string;
  borderRadius?: string;
  unicodeArrowUp?: string;
  unicodeArrowDown?: string;
  boxShadowColor?: string;
  items?: Item[];
}

const SimpleVerticalDropdown: React.FC<SimpleVerticalDropdownProps> = ({
  showBorder,
  label,
  borderRadius,
  unicodeArrowUp,
  unicodeArrowDown,
  items,
  bgColor,
  color,
  fontSize,
  boxShadowColor,
}) => {
  const [isDropped, setIsDropped] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleBlur = () => {
    setTimeoutId(
      setTimeout(() => {
        setIsDropped(false);
      }, 200) // Change delay time as needed
    );
  };

  const handleFocus = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };

  const randomBorderColor = getRandomColor();
  return (
    <div
      className="mainDivSimpleVerticalDropdown"
      style={{
        border: showBorder ? `2px solid ${randomBorderColor}` : 'none',
      }}
    >
      <button
        className="buttonSimpleVerticalDropdown"
        style={{
          borderRadius: borderRadius ?? '10px',
          backgroundColor: bgColor ? bgColor : '#7553BB',
          color: color ? color : 'white',
          fontSize: fontSize ? fontSize : '1rem',
          boxShadow: `0px 0px 10px 1px ${boxShadowColor || '#7553BB'}`,
        }}
        onClick={() => setIsDropped(!isDropped)}
        onBlur={handleBlur}
        onFocus={handleFocus}
      >
        {label}{' '}
        <p
          id="droppedArrowsSimpleVerticalDropdown"
          style={{ color: color ? color : 'white' }}
        >
          {isDropped
            ? unicodeArrowUp
              ? String.fromCodePoint(parseInt(unicodeArrowUp ?? '', 16))
              : '\u{2B9D}'
            : unicodeArrowDown
            ? String.fromCodePoint(parseInt(unicodeArrowDown ?? '', 16))
            : '\u{2B9F}'}
        </p>
      </button>
      {isDropped && (
        <div
          className="droppedDivSimpleVerticalDropdown"
          style={{
            position: 'absolute',
            top: 'calc(100% + 1rem)',
            left: 0,
            borderRadius: borderRadius ? borderRadius : '10px',
            boxShadow: `0px 0px 10px 1px ${boxShadowColor || '#7553BB'}`,
          }}
        >
          {items &&
            items.map((item, index) => (
              <div key={index}>
                <button
                  className="buttonOptionSimpleVerticalDropdown"
                  onClick={item.onclick ? item.onclick : () => {}}
                  style={{
                    backgroundColor: bgColor ? bgColor : '#7553BB',
                    color: color ? color : 'white',
                    fontSize: fontSize ? fontSize : '1rem',
                  }}
                >
                  {item.label ? item.label : 'Option ' + index}
                </button>
                {index !== items.length - 1 && (
                  <div className="buttonOptionBorderSimpleVerticalDropdown"></div>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SimpleVerticalDropdown;
