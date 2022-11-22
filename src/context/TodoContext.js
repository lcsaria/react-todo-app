import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext({});

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage("todos", []);
  //Add todo with validations
  const addTodo = (todo) => {
    if (todo.name === "") return;
    if (todos.find((i) => i.name === todo.name)) return;
    setTodos([...todos, { ...todo, completed: false }]);
  };
  //Delete certain todo
  const deleteTodo = (todo) => {
    setTodos([...todos].filter((i) => i !== todo));
  };
  //Delete all todos with completed property is true
  const deleteCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed !== true));
  };
  //toggles the todo status from completed: true to false or false to true
  const toggleTodo = (text) => {
    setTodos(
      todos.map((todo) => {
        if (todo.name === text) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <>
      <TodoContext.Provider
        value={{
          todos,
          addTodo,
          deleteTodo,
          toggleTodo,
          deleteCompleted,
        }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
};
