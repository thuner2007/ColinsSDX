import React from 'react';
import './SimpleTable1.css';
import { cdx_config } from '../../../cdx_config.ts';

interface Item {
  label?: string;
  items?: string[];
}

interface SimpleTable1Props {
  label?: string;
  height?: string;
  width?: string;
  color?: string;
  bgColor?: string;
  border?: string;
  borderRadius?: string;
  textFontSize?: string;
  labelFontSize?: string;
  labelFontWeight?: string;
  items?: Item[];
  showDots?: boolean;
  margin?: string;
  padding?: string;
  alignLabel?: 'flex-start' | 'center' | 'flex-end';
  cellGap?: string;
  itemGap?: string;
  itemsPerRow?: number;
}

const SimpleTable1: React.FC<SimpleTable1Props> = ({
  label = cdx_config.label,
  height = 'auto',
  width = 'auto',
  color = cdx_config.colorPrimary,
  bgColor = cdx_config.bgColorPrimary,
  border = cdx_config.borderPrimary,
  borderRadius = cdx_config.borderRadius,
  textFontSize = cdx_config.fontSizeText,
  labelFontSize = cdx_config.fontSizeLabel,
  labelFontWeight = cdx_config.labelFontWeight,
  items = [
    { label: 'Item 1', items: ['Item 1.1', 'Item 1.2'] },
    { label: 'Item 2', items: ['Item 2.1', 'Item 2.2'] },
    { label: 'Item 3', items: ['Item 3.1', 'Item 3.2'] },
    { label: 'Item 4', items: ['Item 4.1', 'Item 4.2'] },
  ],
  showDots = false,
  margin = cdx_config.margin,
  padding = cdx_config.padding,
  alignLabel = 'center',
  cellGap = '7px',
  itemGap = '5px',
  itemsPerRow = 1,
}) => {
  return (
    <div
      className="mainDivSimpleTable1"
      style={{
        height,
        width,
        color,
        backgroundColor: bgColor,
        border,
        borderRadius,
        margin,
        padding,
      }}
    >
      <h1
        className="labelSimpleTable1"
        style={{
          fontSize: labelFontSize,
          fontWeight: labelFontWeight,
          alignSelf: alignLabel,
          padding: cellGap,
        }}
      >
        {label}
      </h1>
      <table className="tableSimpleTable1">
        <thead className="theadSimpleTable1">
          <tr>
            {items.map((item, index) => (
              <th
                className="thSimpleTable1"
                key={index}
                style={{ padding: cellGap }}
              >
                {item.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {items.map((item, index) => (
              <td
                className="tdSimpleTable1"
                key={index}
                style={{ padding: cellGap }}
              >
                {showDots ? (
                  <ul
                    className="tableItemWithDots"
                    style={{ fontSize: textFontSize, gap: itemGap }}
                  >
                    {item.items?.map((subItem, subIndex) => (
                      <li key={subIndex} style={{ margin: itemGap }}>
                        {subItem}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div
                    className="tableItemNoDots"
                    style={{ fontSize: textFontSize, gap: itemGap }}
                  >
                    {item.items?.map((subItem, subIndex) => (
                      <div key={subIndex} style={{ margin: itemGap }}>
                        {subItem}
                      </div>
                    ))}
                  </div>
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable1;
