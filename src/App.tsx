import React, { useState } from "react";
import "./App.css";

import SimpleAccordion1 from "./components/Accordions/SimpleAccordion1/SimpleAccordion1.tsx";
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
      <SimpleAccordion1
        dynamicHeight={true}
        items={[
          { label: "Label", text: "Text" },
          {
            label: "Label",
            text: "Text lol black chack hallo velo hie isch gido lol test lol Text lol black chack hallo velo hie isch gido lol test lolText lol black chack hallo velo hie isch gido lol test lolText lol black chack hallo velo hie isch gido lol test lolText lol black chack hallo velo hie isch gido lol test lol",
          },
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
