import React, { useState } from "react";
import Button from "./Button";

const ToDoForm = ({ onAddTodo }) => {
  const [taskName, setTodoText] = useState("");
  const [taskStatus, setTodoStatus] = useState("Todo");
  const maxlength = 25;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName) {
      onAddTodo({ text: taskName, status: taskStatus });
      setTodoText("");
      setTodoStatus("Todo");
    }
  };

  const handleTodoInputChange = (e) => {
    setTodoText(e.target.value.trim());
  };

  const handleTodoStatusChange = (e) => {
    setTodoStatus(e.target.value);
  };

  const taskStatuses = ["Todo", "In-Progress", "Completed"];

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="taskname">Enter to do:</label>
      <input
        className="todo-input"
        type="text"
        placeholder="Enter to do"
        value={taskName}
        onChange={handleTodoInputChange}
        maxLength={maxlength}
      ></input>
      <div className="user-status">
        <label htmlFor="userstatus">Todo Status:</label>
        <select value={taskStatus} onChange={handleTodoStatusChange}>
          {taskStatuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      <Button
        color="#8888b9"
        label="Create To Do"
        onClick={handleSubmit}
        isDisabled={!taskName}
      />
    </form>
  );
};

export default ToDoForm;
