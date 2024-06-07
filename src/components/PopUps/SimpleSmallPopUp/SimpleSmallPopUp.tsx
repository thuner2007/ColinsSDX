import React, { useEffect, useState } from 'react';
import './SimpleSmallPopUp.css';

interface SimpleSmallPopUpProps {
  label: string;
  width?: string;
  height?: string;
  bgColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  color?: string;
  fontSize?: string;
  top?: string;
  show?: boolean;
  onClose(): void;
  stayTime?: number;
}

const SimpleSmallPopUp: React.FC<SimpleSmallPopUpProps> = ({
  label,
  width,
  height,
  bgColor,
  borderRadius,
  borderWidth,
  borderColor,
  color,
  fontSize,
  top,
  show,
  onClose,
  stayTime,
}) => {
  const [visible, setVisible] = useState(show);
  const [opacity, setOpacity] = useState(show ? 1 : 0);

  useEffect(() => {
    if (show) {
      setVisible(true);
      setOpacity(1);
      setTimeout(
        () => {
          setOpacity(0);
          setTimeout(() => {
            setVisible(false);
            onClose();
          }, 300);
        },
        stayTime ? stayTime : 3000
      );
    }
  }, [show, onClose]);

  return (
    <>
      {visible && (
        <div
          className="mainDivSimpleSmallPopUp"
          style={{
            opacity: opacity,
            top: top ? top : '200px',
            width: width ? width : '200px',
            height: height ? height : '50px',
            backgroundColor: bgColor ? bgColor : 'grey',
            borderRadius: borderRadius ? borderRadius : '1rem',
            border: borderWidth
              ? `${borderWidth} solid ${borderColor || 'grey'}`
              : borderColor
              ? `2px solid ${borderColor}`
              : '2px solid grey',
            fontSize: fontSize ? fontSize : '1.2rem',
            color: color ? color : 'white',
          }}
        >
          {label ? label : 'This is a PopUp!'}
        </div>
      )}
    </>
  );
};

export default SimpleSmallPopUp;
