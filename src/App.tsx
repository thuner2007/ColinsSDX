import React from 'react';
import './App.css';
import NavBarNormal1 from './components/NavBars/NavBarNormal1.tsx';
import SimpleInputWithRequired from './components/InputFields/SimpleInputWithRequired.tsx';
import VerticalItemListDiv from './components/Divs/VerticalItemListDiv/VerticalItemListDiv.tsx';
import HorizontalItemListDiv from './components/Divs/HorizontalItemListDiv/HorizontalItemListDiv.tsx';
function App() {
  const consoleLogHey = () => {
    console.log('Hey!');
  };
  return (
    <div className="App">
      <NavBarNormal1
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
      />
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>

      <HorizontalItemListDiv>
        <SimpleInputWithRequired
          onTextChange={(text) => console.log(text.target.value)}
          mandatory={true}
          label="Name"
          hasError={true}
          errorMessage="Error message"
        />
        <SimpleInputWithRequired
          onTextChange={(text) => console.log(text.target.value)}
          mandatory={true}
          label="Name"
          hasError={true}
          errorMessage="Error message"
        />
        <SimpleInputWithRequired
          onTextChange={(text) => console.log(text.target.value)}
          mandatory={true}
          label="Name"
          hasError={true}
          errorMessage="Error message"
        />
      </HorizontalItemListDiv>
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
