    import React, { useState } from 'react'
    import Button from './Button'
    
    const ToDoForm = ({onAddTodo}) => {


        const [TaskName, setTodoText] = useState('');
        const [TaskStatus, setTodoStatus]=useState('todo');

        const maxlength = 25;

         const handleSubmit = (e) => {
            e.preventDefault();
            if(TaskName.trim()) {
                onAddTodo({text:TaskName, status:TaskStatus});
                setTodoText('')
                setTodoStatus('Todo')
            }
         }
        
        const handleInputChange = (e) =>{
           setTodoText(e.target.value)
        }

        const handleStatusChange = (e) => {
          setTodoStatus (e.target.value)
        }

        const isButtonDisabled = TaskName.trim() === '';

        return ( 
        <form className='ToDoForm' onSubmit={handleSubmit}>  
             <label htmlFor='taskname'>Enter to do:</label>        
             <input className='TodoInput' type='text' placeholder='Enter to do' value={TaskName} onChange={handleInputChange} maxLength={maxlength}></input>
              <div className="userStatus">
                  <label htmlFor='userstatus'>Todo Status:</label>
                  <select value={TaskStatus} onChange={handleStatusChange}>
                     <option value="Todo">Todo</option>
                     <option value="In-Progress">In-Progress</option>
                     <option value="Completed">Completed</option>
                  </select>
              </div>
            <Button color='#8888b9' label='Create To Do' onClick={handleSubmit} isClicked={false} isDisabled={isButtonDisabled} />
        </form>
        )
    }

export default ToDoForm                                
          
                                             