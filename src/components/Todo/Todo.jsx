import React, { useContext, useState } from "react";

// Components
import Task from "../task/Task";

// Context
import { TodoContext } from "../../context/TodolistContextProvider";

// Styles
import styles from "./Todo.module.css";

const Todo = () => {
  const { dispatch } = useContext(TodoContext);
  const [task, setTask] = useState("");
  const [placeHolder, setPlaceHolder] = useState("Enter your task:");

  const changeHandler = (event) => {
    setTask(event.target.value);
  };
  const addHandler = (event) => {
    if (task === "") setPlaceHolder("Enter your task first:'(🥲");
    else {
      dispatch({ type: "ADD", payload: { id: Math.random(), task } });
      setTask("");
      setPlaceHolder("enter your next task...");
      console.log(task, "this is task");
    }
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.task}>
        <input
          value={task}
          type="text"
          placeholder={placeHolder}
          onChange={changeHandler}
        />
        <button onClick={addHandler}>ADD</button>
      </div>
      <Task />
    </div>
  );
};

export default Todo;
