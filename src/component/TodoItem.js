import React from "react";
import "../App.css";
import { MdDelete } from "react-icons/md";
function TodoItem({ todolist, handledeleteItem, handleToggle, dark }) {
  return (
    <div className="item-conainer">
      {todolist.length
        ? todolist.map((todo) => (
            <div
              key={todo.id}
              className="todo-item"
              style={{
                backgroundColor: dark ? "#333" : todo.color,
                color: dark ? "white" : "",
              }}
              onClick={() => handleToggle(todo.id)}
            >
              <div style={{ marginRight: "2rem" }}>{todo.name}</div>
              <div className="delete" onClick={() => handledeleteItem(todo.id)}>
                <MdDelete style={{ fontSize: "1.5rem" }} />
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default TodoItem;
