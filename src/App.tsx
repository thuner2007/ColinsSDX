import React, { useState } from "react";
import "./App.css";

import SimpleAccordion1 from "./components/Accordions/SimpleAccordion1/SimpleAccordion1.tsx";
import SimpleButton1 from "./components/Buttons/SimpleButton1/SimpleButton1.tsx";
import SimpleChart1 from "./components/Charts/SimpleChart1/SimpleChart1.tsx";
import SimpleCheckbox1 from "./components/Checkboxes/SimpleCheckbox1/SimpleCheckbox1.tsx";
import SimpleVerticalDropdown from "./components/Dropdowns/SimpleVerticalDropdown/SimpleVerticalDropdown.tsx";
import SimpleBigTextInputWithRequired from "./components/InputFields/SimpleBigTextInputWithRequired/SimpleBigTextInputWithRequired.tsx";
import SimpleInputWithRequired from "./components/InputFields/SimpleInputWithRequired/SimpleInputWithRequired.tsx";
import NavBarNormal1 from "./components/NavBars/NavBarNormal1/NavBarNormal1.tsx";
import NavBarWithComponents1 from "./components/NavBars/NavBarWithComponents1/NavBarWithComponents1.tsx";
import SimpleSmallPopUp from "./components/PopUps/SimpleSmallPopUp/SimpleSmallPopUp.tsx";
import SimpleScrollBar from "./components/ScrollBars/SimpleScrollBar.tsx";
import SimpleCard1 from "./components/Cards/SimpleCard1/SimpleCard1.tsx";
import SimpleDivider1 from "./Dividers/SimpleDivider1/SimpleDivider1.tsx";
import SimpleFooter1 from "./components/Footers/SimpleFooter1/SimpleFooter1.tsx";
import SimpleLoader1 from "./components/Loaders/SimpleLoader1.tsx";
function App() {
  const [show, setShow] = useState(false);
  const consoleLogHey = () => {
    console.log("Hey!");
  };
  return (
    <div className="App">
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <SimpleCard1 />
      <SimpleCard1 />
      <SimpleScrollBar />
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
      <SimpleLoader1 />
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
      <SimpleFooter1 />
    </div>
  );
}

export default App;
