import React, { useEffect } from "react";
import "./BodySimpleBackground1.css";

interface BodySimpleBackground1Props {
  bgColor?: string;
}

const BodySimpleBackground1: React.FC<BodySimpleBackground1Props> = ({
  bgColor = "rgba(117, 83, 187, 0.4)",
}) => {
  useEffect(() => {
    document.body.style.setProperty(
      "--BodySimpleBackground1_backgroundColor",
      bgColor
    );
  }, [bgColor]);

  return null;
};

export default BodySimpleBackground1;
