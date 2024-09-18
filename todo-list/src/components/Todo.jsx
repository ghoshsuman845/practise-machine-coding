import React from "react";

const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <p
        className={`${task.completed ? "completed" : "incompleted"}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>

      <div className="edit-icon" onClick={() => editTodo(task.id)}>
        Edit
      </div>
      <div className="delete-icon" onClick={() => deleteTodo(task.id)}>
        Delete
      </div>
    </div>
  );
};

export default Todo;
