import React, { useEffect, useState } from "react";
import "./SimpleSmallPopUp.css";

interface SimpleSmallPopUpProps {
  label?: string;
  bgColor?: string;
  borderRadius?: string;
  color?: string;
  fontSize?: string;
  top?: string;
  show?: boolean;
  onClose(): void;
  stayTime?: number;
  border?: string;
  padding?: string;
}

const SimpleSmallPopUp: React.FC<SimpleSmallPopUpProps> = ({
  label,
  bgColor,
  borderRadius,
  color,
  fontSize,
  top,
  show,
  onClose,
  stayTime,
  border,
  padding,
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
            top: top || "100px",
            backgroundColor: bgColor || "#7553BB",
            borderRadius: borderRadius || "1rem",
            fontSize: fontSize || "1rem",
            color: color || "white",
            border: border || "1px solid #7553BB",
            padding: padding || "0.5rem 1rem",
          }}
        >
          {label ? label : "This is a PopUp!"}
        </div>
      )}
    </>
  );
};

export default SimpleSmallPopUp;
