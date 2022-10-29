import React from "react";
import "../App.css";
function TodoItem({ todolist, handledeleteItem, handleToggle }) {
  return (
    <div className="item-conainer">
      {todolist.length
        ? todolist.map((todo) => (
            <div
              key={todo.id}
              className="todo-item"
              style={{ backgroundColor: todo.color }}
              onClick={() => handleToggle(todo.id)}
            >
              <div>{todo.name}</div>
              <button
                className="delete"
                onClick={() => handledeleteItem(todo.id)}
                style={{ background: "red" }}
              >
                Delete
              </button>
            </div>
          ))
        : null}
    </div>
  );
}

export default TodoItem;
