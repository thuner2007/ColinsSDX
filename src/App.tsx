import React, { useState } from "react";
import "./App.css";

import SimpleAccordion1 from "./components/Accordions/SimpleAccordion1/SimpleAccordion1.tsx";
import SimpleButton1 from "./components/Buttons/SimpleButton1/SimpleButton1.tsx";
import SimpleChart1 from "./components/Charts/SimpleChart1/SimpleChart1.tsx";
import SimpleCheckbox1 from "./components/Checkboxes/SimpleCheckbox1/SimpleCheckbox1.tsx";
import SimpleVerticalDropdown from "./components/Dropdowns/SimpleVerticalDropdown/SimpleVerticalDropdown.tsx";
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
      <SimpleVerticalDropdown
        label="Cool dropdown"
        items={[
          { label: "Item 1", onClick: consoleLogHey },
          { label: "Item 2", onClick: consoleLogHey },
        ]}
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
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
    </div>
  );
}

export default App;
