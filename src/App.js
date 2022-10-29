import React, { useState } from "react";
import "./App.css";
import TodoItem from "./component/TodoItem";

const App = () => {
  const [todolist, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      setTodoList([
        ...todolist,
        {
          name: inputValue,
          id: new Date(),
          color: generateRandomColor(),
          toggle: false,
        },
      ]);
    } else {
      alert("Todo Item cannot be empty");
    }

    setInputValue("");
  };

  const handleToggle = (id) => {
    todolist.forEach((todo, index) => {
      if (todo.id === id) {
        console.log(todolist[index]);
        // setTodoList([
        //   ...todolist,
        //   {
        //     toggle: !todolist[index].toggle,
        //   },
        // ]);
      }
    });
  };

  const handledeleteItem = (id) => {
    setTodoList(todolist.filter((todo) => todo.id !== id));
  };

  function generateRandomColor() {
    let maxVal = 0xffffff; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
  }

  return (
    <div className="App">
      <div
        className="container"
        style={{ border: `1px solid ${generateRandomColor()}` }}
      >
        <div>My todo list</div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="todoInput"
            type="text"
            value={inputValue}
            placeholder="enter todo item"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="submit" type="submit">
            Add
          </button>
        </form>
        <TodoItem
          todolist={todolist}
          handledeleteItem={handledeleteItem}
          handleToggle={handleToggle}
        />
      </div>
    </div>
  );
};

export default App;
