import React, { useState } from "react";
import "./App.css";
import TodoItem from "./component/TodoItem";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

const App = () => {
  const [todolist, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [dark, setDark] = useState(false);

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
        // const toggleChanges = !todolist[index].toggle;
        // console.log(toggleChanges);
        // setTodoList([
        //   ...todolist,
        //   { ...todolist[index], toggle: toggleChanges },
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
            cursor: "pointer",
            position: "relative",
            margin: "0.5rem 0",
          }}
          onClick={() => setDark((prevState) => !prevState)}
        >
          <span>
            {dark ? <FaToggleOn style={{ color: "green" }} /> : <FaToggleOff />}
          </span>{" "}
          <span
            style={{
              fontSize: "0.7rem",
              paddingBottom: "0.3rem",
              paddingLeft: "0.5rem",
            }}
          >
            Dark Mode
          </span>
        </div>
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
          dark={dark}
        />
      </div>
    </div>
  );
};

export default App;
