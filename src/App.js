import React, { useState } from "react";
import "./App.css";

function App() {
  const [buttonText, setButtonText] = useState("Click me, please");
  return (
    <button
      onClick={() => {
        if(buttonText === "Click me, please") {
          setButtonText("Thanks, been clicked!");
        } else {
          setButtonText("Click me, please")
        }
        
      }}
    >
      {buttonText}
    </button>
  );
}

export default App;
