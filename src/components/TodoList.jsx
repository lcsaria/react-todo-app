import { useEffect, useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import { Filters } from "./Filters";
import { TodoItem } from "./TodoItem";
import { TodoStats } from "./TodoStats";

export const TodoList = () => {
  const { todos } = useTodoContext();
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState("all");
  useEffect(() => {
    setList(todos);
  }, [todos]);

  const completed = () => {
    setList(todos.filter((i) => i.completed === true));
  };
  const active = () => {
    setList(todos.filter((i) => i.completed === false));
  };

  const all = () => {
    setList(todos);
    setSelected("all");
  };

  return (
    <div className="flex flex-col">
      <div
        id="todo-list"
        className="bg-white dark:bg-slate-800  rounded-t-md h-80 overflow-y-auto sm:h-96 shadow-2xl"
      >
        <ul>
          {list.length !== 0 ? (
            list.map((todo, index) => (
              <TodoItem todo={todo} key={index}></TodoItem>
            ))
          ) : (
            <>
              <div className="flex flex-col items-center"></div>
            </>
          )}
        </ul>
      </div>
      <TodoStats />
      <Filters all={all} active={active} completed={completed} />
    </div>
  );
};
