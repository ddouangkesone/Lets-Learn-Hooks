import React, { useState } from "react";
import "./App.css";

function App() {
  const [buttonText, setButtonText] = useState("Click me, please");
  return (
    <button
      onClick={() => {
        setButtonText("Thanks, been clicked!");
      }}
    >
      {buttonText}
    </button>
  );
}

export default App;
