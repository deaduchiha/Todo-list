import React, { useContext } from "react";

// Context
import { TodoContext } from "../../context/TodolistContextProvider";

// Styles
import styles from "./Task.module.css";

const Task = () => {
  const { state, dispatch } = useContext(TodoContext);

  const deletHandler = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <div className={styles.container}>
      {state.todos.map((item) => (
        <div className={styles.tasks} key={item.id}>
          <span>{item.task}</span>
          <button onClick={() => deletHandler(item.id)}>
            <i className="bi bi-check2-circle"></i>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Task;
