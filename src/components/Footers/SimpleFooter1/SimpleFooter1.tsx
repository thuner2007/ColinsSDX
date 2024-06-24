import React from 'react';
import './SimpleFooter1.css';

interface SimpleFooter1Props {
  bgColor?: string;
  color?: string;
  padding?: string;
  rows: [
    {
      label: string;
      items: [{ label: string; onClick: () => void }];
    }
  ];
  alignItems?: 'flex-start' | 'center' | 'flex-end';
}

const SimpleFooter1: React.FC<SimpleFooter1Props> = ({
  bgColor = 'white',
  color = 'black',
  padding = '1rem',
  rows = [
    {
      label: 'Row 1',
      items: [
        { label: 'Item 1', onClick: () => console.log('Item 1 clicked') },
        { label: 'Item 2', onClick: () => console.log('Item 2 clicked') },
      ],
    },
    {
      label: 'Row 2',
      items: [
        { label: 'Item 1', onClick: () => console.log('Item 1 clicked') },
        { label: 'Item 2', onClick: () => console.log('Item 2 clicked') },
      ],
    },
  ],
  alignItems = 'center',
}) => {
  return (
    <div
      className="mainDivSimpleFooter1"
      style={{
        backgroundColor: bgColor,
        color: color,
        padding: padding,
        alignItems: alignItems,
        width: `calc(100% - ${padding} - ${padding})`,
      }}
    >
      <div className="parentDivRowsSimpleFooter1">
        {rows.map((row, index) => (
          <div key={index} className="rowSimpleFooter1">
            <h1 className="rowLabelSimpleFooter1">{row.label}</h1>
            {row.items.map((item, index) => (
              <p
                className="itemSimpleFooter1"
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
