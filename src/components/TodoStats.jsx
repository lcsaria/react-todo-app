import React from "react";
import { useTodoContext } from "../context/TodoContext";

export const TodoStats = () => {
  const { deleteCompleted, todos } = useTodoContext();
  let activeTodos = todos.filter((todo) => todo.completed === false);
  return (
    <div className="flex flex-row justify-between bg-white dark:bg-slate-800 px-4 py-3.5 rounded-b-md shadow-2xl text-indigo-300 text-sm">
      <span>{`${activeTodos.length || 0} item/s left`}</span>
      <button onClick={() => deleteCompleted()}>Clear Completed</button>
    </div>
  );
};
