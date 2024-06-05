import React from 'react';
import './App.css';
import NavBarNormal1 from './components/NavBars/NavBarNormal1.tsx';
import VerticalItemListDiv from './components/Divs/VerticalItemListDiv/VerticalItemListDiv.tsx';
import HorizontalItemListDiv from './components/Divs/HorizontalItemListDiv/HorizontalItemListDiv.tsx';
import SimpleVerticalDropdown from './components/Dropdowns/SimpleVerticalDropdown/SimpleVerticalDropdown.tsx';
import UploadFileWithPreview from './components/FileHandling/UploadFileWithPreview/UploadFileWithPreview.tsx';
import NavBarWithComponents1 from './components/NavBars/NavBarWithComponents1.tsx';
import HorizontalItemListDivWithBorder from './components/Divs/HorizontalItemListDivWithBorder/HorizontalItemListDivWithBorder.tsx';
import VerticalItemListDivWithBorder from './components/Divs/VerticalItemListDivWithBorder/VerticalItemListDivWithBorder.tsx';
import SimpleBigTextInputWithRe from './components/InputFields/SimpleBigTextInputWithRequired/SimpleBigTextInputWithRequired.tsx';
import SimpleBigTextInputWithRequired from './components/InputFields/SimpleBigTextInputWithRequired/SimpleBigTextInputWithRequired.tsx';
function App() {
  const consoleLogHey = () => {
    console.log('Hey!');
  };
  return (
    <div className="App">
      {/* <NavBarNormal1
        bgBlur="4px"
        bgColor="rgba(153, 153, 255, 0.3)"
        height={'10vh'}
        items={[
          {
            src: './ms-symbollockup_mssymbol_19.svg',
            alt: 'item0',
            onclick: consoleLogHey,
          },
          {
            src: './ms-symbollockup_mssymbol_19.svg',
            alt: 'item1',
            onclick: consoleLogHey,
          },
          {
            src: './ms-symbollockup_mssymbol_19.svg',
            alt: 'item2',
            onclick: consoleLogHey,
          },
          {
            src: './ms-symbollockup_mssymbol_19.svg',
            alt: 'item3',
            onclick: consoleLogHey,
          },
        ]}
        calcScrollBar={true}
      /> */}
      <NavBarWithComponents1
        bgBlur="4px"
        bgColor="rgba(153, 153, 255, 0.3)"
        height={'10vh'}
        calcScrollBar={true}
      >
        <SimpleVerticalDropdown
          label="test"
          items={[
            { label: 'item1', onclick: consoleLogHey },
            { label: 'item1', onclick: consoleLogHey },
            { label: 'item1', onclick: consoleLogHey },
          ]}
        ></SimpleVerticalDropdown>
        <SimpleVerticalDropdown
          label="test"
          items={[
            { label: 'item1', onclick: consoleLogHey },
            { label: 'item1', onclick: consoleLogHey },
            { label: 'item1', onclick: consoleLogHey },
          ]}
        ></SimpleVerticalDropdown>
      </NavBarWithComponents1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <HorizontalItemListDivWithBorder>
        <SimpleVerticalDropdown label="Test" />
        <SimpleVerticalDropdown label="Test" />
      </HorizontalItemListDivWithBorder>
      <VerticalItemListDivWithBorder>
        {' '}
        <SimpleVerticalDropdown label="Test" />
        <SimpleVerticalDropdown label="Test" />
      </VerticalItemListDivWithBorder>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <SimpleBigTextInputWithRequired label="test2" overflow='hidden' />
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
    </div>
  );
}

export default App;
