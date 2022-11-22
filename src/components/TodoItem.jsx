import { useTodoContext } from "../context/TodoContext";

export const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleTodo } = useTodoContext();

  return (
    <li className="border-b border-indigo-100 dark:border-slate-900">
      <label
        htmlFor={todo.name}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        <div className=" px-4 py-2 flex justify-between">
          <div className="flex space-x-2 items-center">
            <button
              className={
                todo.completed
                  ? "border border-indigo-100 dark:border-slate-900  rounded-full w-6 h-6 bg-gradient-to-br from-blue-500 to-pink-500 p-1"
                  : "border border-indigo-100 dark:placeholder:border-slate-900  rounded-full w-6 h-6 p-1"
              }
              id={todo.name}
              onClick={() => {
                toggleTodo(todo.name);
              }}
            >
              {todo.completed ? (
                <img
                  className="icons mx-auto"
                  src="/images/icon-check.svg"
                  alt=""
                />
              ) : (
                ""
              )}
            </button>
            <span
              className={
                todo.completed ? " text-indigo-200 dark:text-indigo-900" : ""
              }
            >
              {todo.name}
            </span>
          </div>
          <button onClick={() => deleteTodo(todo)}>
            <img className="icons" src="/images/icon-cross.svg" alt="" />
          </button>
        </div>
      </label>
    </li>
  );
};
