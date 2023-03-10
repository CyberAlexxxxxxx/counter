import './App.css';
import React, { useState } from 'react';

function App(){
const [counterValue, setcounterValue] = useState(0);
let helpTXT;

if (counterValue == 0){
  helpTXT = "Click a button to get started!";
} else {
  helpTXT = "Click on the clear button to restart!";
}

  return(
    
<>
<div>
    <h1 className='counter'>{counterValue}</h1>
    <p>{helpTXT}</p>
    <button onClick={() => setcounterValue(counterValue - 1)} className='BTN'>-</button>
    <button onClick={() => setcounterValue(counterValue - counterValue)} className='BTN'>clear</button>
    <button onClick={() => setcounterValue(counterValue + 1)} className='BTN'>+</button>
    </div>
</>
  );
}

export default App;
