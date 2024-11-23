import React, { useState } from "react"
import './App.css';
import Button from './component/Button';
import ToDoForm from "./component/TodoForm";
<<<<<<< HEAD
import ToDoList from "./component/TodoList";

function App() {

  const [clickedButton, setClickedButton] = useState(false);
  const[todos, setTodos] = useState([]);
 
  const layoutToggleButtonClick =  (buttonID) => {
    setClickedButton(buttonID);
 };

const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
};

const removeTodo = (index) => {
  setTodos(todos.filter((_, i) => i !== index));
};

const isTodoButtonClicked = clickedButton == 'todoButton';
const isTodoListButtonClicked = clickedButton == 'todoListButton';

=======





function App() {
  const [clickedButton, setClickedButton] = useState(false)
 

  const handleClick =  (buttonId) => {
     setClickedButton(buttonId);
  }

 
  
   
>>>>>>> 6f70b67a8d2f211473e2f9c1218d4f2cbde9220a
    return (
      <div className="App">
        <div className='app-container'>
          <h1>TODO App</h1>
<<<<<<< HEAD
            <div className='layout-button-container'>
               <Button color="#8888b9" label="Todo" onClick={() => {layoutToggleButtonClick("todoButton")}}  isClicked={isTodoButtonClicked}  />
               <Button color="#8888b9" label="Todo list" onClick={() => {layoutToggleButtonClick("todoListButton")}}  isClicked={isTodoListButtonClicked} />
            </div>
           
            {isTodoButtonClicked && (
              <ToDoForm onAddTodo={addTodo} />
            )}

            {isTodoListButtonClicked && (
              <ToDoList todos={todos} onRemoveTodo={removeTodo} />
            )}
=======
            <div className='button-container'>
               <Button color="#8888b9" label="Todo" onClick={() => {handleClick("button1")}}  isClicked={clickedButton === "button1"}  />
               <Button color="#8888b9" label="Todo list" onClick={() => {handleClick("button2")}}  isClicked={clickedButton === "button2"} />
            </div>
           
>>>>>>> 6f70b67a8d2f211473e2f9c1218d4f2cbde9220a

        </div>
      </div>
    );
<<<<<<< HEAD
};

export default App; 
=======
}

export default App;

                     
    
     
>>>>>>> 6f70b67a8d2f211473e2f9c1218d4f2cbde9220a
