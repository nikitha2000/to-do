import React, { useState } from "react"
import './App.css';
import Button from './component/Button';


function App() {


  const [clickedButton, setClickedButton] = useState(false)
  const[todos, setTodo] = useState([])
 

  const handleClick =  (buttonId) => {
     setClickedButton(buttonId);
  }

 
  const addTodo = (newTodo) => {
    setTodo([...todos, newTodo])
}


   
    return (
      <div className="App">
        <div className='app-container'>
          <h1>TODO App</h1>
            <div className='button-container'>
               <Button color="#8888b9" label="Todo" onClick={() => {handleClick("button1")}}  isClicked={clickedButton === "button1"}  />
               <Button color="#8888b9" label="Todo list" onClick={() => {handleClick("button2")}}  isClicked={clickedButton === "button2"} />
            </div>
           
            {clickedButton=='button1' && (
              <ToDoForm onAddTodo={addTodo} />
            )}

            
        </div>
      </div>
    );

}

export default App;


                 
    

     