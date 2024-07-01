import React from "react";
import "./SimpleFooter1.css";
import { cdx_config } from "../../../cdx_config.ts";

interface SimpleFooter1Props {
  bgColor?: string;
  color?: string;
  paddingTop?: string;
  paddingBottom?: string;
  rows?: {
    label: string;
    items: { label: string; onClick?: () => void }[];
  }[];
  alignRows?: "flex-start" | "center" | "flex-end";
  alignItems?: "flex-start" | "center" | "flex-end";
  borderTop?: string;
  gap?: string;
  textMargin?: string;
  itemUnderline?: "none" | "underline";
  labelFontSize?: string;
  textFontSize?: string;
}

const SimpleFooter1: React.FC<SimpleFooter1Props> = ({
  bgColor = cdx_config.bgColorPrimary,
  color = cdx_config.colorPrimary,
  paddingBottom = "1rem",
  paddingTop = "1rem",
  rows = [
    {
      label: "Legals",
      items: [
        { label: "Impressum", onClick: () => console.log("Impressum clicked") },
        {
          label: "Pricacy Policy",
          onClick: () => console.log("Pricacy Policy clicked"),
        },
        {
          label: "Terms of Service",
          onClick: () => console.log("Terms of Service clicked"),
        },
        {
          label: "Cookie Policy",
          onClick: () => console.log("Cookie Policy clicked"),
        },
      ],
    },
    {
      label: "Services",
      items: [
        { label: "Buy", onClick: () => console.log("Buy clicked") },
        { label: "Sell", onClick: () => console.log("Sell clicked") },
        { label: "Rent", onClick: () => console.log("Rent clicked") },
        { label: "Lease", onClick: () => console.log("Lease clicked") },
      ],
    },
  ],
  alignItems = "center",
  borderTop = cdx_config.borderPrimary,
  alignRows = "center",
  gap = cdx_config.gap,
  textMargin = "1rem",
  itemUnderline = "underline",
  labelFontSize = cdx_config.fontSizeLabel,
  textFontSize = "1rem",
}) => {
  return (
    <div
      className="mainDivSimpleFooter1"
      style={{
        backgroundColor: bgColor,
        color: color,
        alignItems: alignRows,
        width: "100%",
        borderTop: borderTop,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
      }}
    >
      <div className="parentDivRowsSimpleFooter1" style={{ gap: gap }}>
        {rows.map((row, index) => (
          <div
            key={index}
            className="rowSimpleFooter1"
            style={{ alignItems: alignItems }}
          >
            <h1
              className="rowLabelSimpleFooter1"
              style={{ fontSize: labelFontSize }}
            >
              {row.label}
            </h1>
            {row.items.map((item, index) => (
              <p
                className="itemSimpleFooter1"
                style={{
                  margin: textMargin,
                  textDecoration: itemUnderline,
                  fontSize: textFontSize,
                }}
                key={index}
                onClick={item.onClick}
              >
                {item.label}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleFooter1;
