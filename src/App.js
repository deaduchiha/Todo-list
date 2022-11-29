import React from "react";
import { Route, Routes } from "react-router-dom";

// Context
import TodolistContextProvider from "./context/TodolistContextProvider";

// Components
import Navbar from "./components/shared/Navbar";
import Todo from "./components/Todo/Todo";

const App = () => {
  return (
    <>
      <Navbar />
      <TodolistContextProvider>
        <Routes>
          <Route path="/" element={<Todo />} />
        </Routes>
      </TodolistContextProvider>
    </>
  );
};

export default App;
