import React from "react";

const TodoList = ({ todos, onRemoveTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <li key={index} className={`${todo.status.toLowerCase()}`}>
            <span>{todo.text}</span>
            <div className="x-todo" onClick={() => onRemoveTodo(index)}>
              {" "}
              X{" "}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
