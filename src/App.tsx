import React from 'react';
import './App.css';
import NavBarNormal1 from './components/NavBars/NavBarNormal1.tsx';
function App() {
  const consoleLogHey = () => {
    console.log('Hey!');
  };
  return (
    <div className="App">
      <NavBarNormal1
        height={'10vh'}
        items={[
          {
            src: './ms-symbollockup_mssymbol_19.svg',
            alt: 'item0',
            onclick: consoleLogHey,
          },
          {
            src: './ms-symbollockup_mssymbol_19.svg',
            alt: 'item0',
            onclick: consoleLogHey,
          },
          {
            src: './ms-symbollockup_mssymbol_19.svg',
            alt: 'item0',
            onclick: consoleLogHey,
          },
          {
            src: './ms-symbollockup_mssymbol_19.svg',
            alt: 'item0',
            onclick: consoleLogHey,
          },
          {
            src: './ms-symbollockup_mssymbol_19.svg',
            alt: 'item0',
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
      <h1>TEST</h1>
      <h1>TEST</h1>
    </div>
  );
}

export default App;
