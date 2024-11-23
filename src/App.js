import React, { useState } from "react"
import './App.css';
import Button from './component/Button';
import ToDoForm from "./component/TodoForm";

function App() {
  const [clickedButton, setClickedButton] = useState(false);
  const[todos, setTodo] = useState([]);
 
const layoutToggleButtonClick =  (buttonID) => {
    setClickedButton(buttonID);
 };
  
  const addTodo = (newTodo) => {
    setTodo([...todos, newTodo]);
};
  
  const isTodoButtonClicked = clickedButton == 'todoButton';
  const isTodoListButtonClicked = clickedButton == 'todoListButton';
  
 return (
      <div className="App">
        <div className='app-container'>
          <h1>TODO App</h1>
            <div className='layout-button-container'>
               <Button color="#8888b9" label="Todo" onClick={() => {layoutToggleButtonClick("todoButton")}}  isClicked={isTodoButtonClicked}  />
               <Button color="#8888b9" label="Todo list" onClick={() => {layoutToggleButtonClick("todoListButton")}}  isClicked={isTodoListButtonClicked} />
            </div>

           {isTodoButtonClicked && (
              <ToDoForm onAddTodo={addTodo} />
            )}
        </div>
      </div>
    );
};
export default App;

     
