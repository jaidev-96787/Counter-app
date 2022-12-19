import React, { useState } from "react";
import "./App.css";

const App = () => {
  //  let count = 1;
  const state = useState();

  const [getcount, setcount] = useState(1);

  const IncNum = () => {
    setcount(getcount + 1);
  };
  const DecNum = () => {
    setcount(getcount - 1);
  };

  return (
    <div className="App">
      <h1> {getcount} </h1>
      <button onClick={IncNum}>Increment</button>
      <button onClick={DecNum}>Decrement</button>
    </div>
  );
};

export default App;
