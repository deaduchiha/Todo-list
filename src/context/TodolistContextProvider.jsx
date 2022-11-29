import React, { useReducer, createContext } from "react";

// InitialState
const initialState = { todos: [] };

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "REMOVE":
      return {
        ...state,
        todos: [...state.todos.filter((item) => item.id !== action.payload)],
      };
    default:
      return state;
  }
};

export const TodoContext = createContext();

const TodolistContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodolistContextProvider;
