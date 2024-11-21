import React, { useState } from "react"
import './App.css';
import Button from './component/Button';





function App() {

const [clickedButton, setClickedButton] = useState(null)

const handleClick =  (buttonId) => {
   setClickedButton(buttonId);
}

 
  return (
    <div className="App">
      <div className='app-container'>
        <h1>TODO App</h1>
          <div className='button-container'>
             <Button color="#8888b9" label="Todo" onClick={() => {handleClick("button1")}}  isClicked={clickedButton === "button1"} isDisabled={false} />
             <Button color="#8888b9" label="Todo list" onClick={() => {handleClick("button2")}}  isClicked={clickedButton === "button2"} isDisabled={false}/>
          </div>
      </div>
    </div>
  );
}

export default App;
    
     