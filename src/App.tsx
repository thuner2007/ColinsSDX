import React, { useState } from 'react';
import './App.css';
import SimpleVerticalDropdown from './components/Dropdowns/SimpleVerticalDropdown/SimpleVerticalDropdown.tsx';
import NavBarWithComponents1 from './components/NavBars/NavBarWithComponents1/NavBarWithComponents1.tsx';
import HorizontalItemListDivWithBorder from './components/Divs/HorizontalItemListDivWithBorder/HorizontalItemListDivWithBorder.tsx';
import VerticalItemListDivWithBorder from './components/Divs/VerticalItemListDivWithBorder/VerticalItemListDivWithBorder.tsx';
import SimpleBigTextInputWithRequired from './components/InputFields/SimpleBigTextInputWithRequired/SimpleBigTextInputWithRequired.tsx';
import SimpleInputWithRequired from './components/InputFields/SimpleInputWithRequired/SimpleInputWithRequired.tsx';
import SimpleButton1 from './components/Buttons/SimpleButton1/SimpleButton1.tsx';
import SimpleSmallPopUp from './components/PopUps/SimpleSmallPopUp/SimpleSmallPopUp.tsx';
function App() {
  const [show, setShow] = useState(false);
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
        bgColor="rgba(102, 102, 153, 0.3)"
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
      <SimpleSmallPopUp
        label="Test"
        onClose={() => setShow(false)}
        show={show}
        stayTime={30000}
        borderColor="yellow"
        borderWidth="10px"
      />
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <SimpleButton1
        onClick={() => {
          setShow(!show);
        }}
      />
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
    </div>
  );
}

export default App;
