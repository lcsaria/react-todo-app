import { useState } from "react";

export const Filters = ({ completed, active, all }) => {
  const [state, setState] = useState("all");
  return (
    <div className="flex flex-row justify-center space-x-6 bg-white dark:bg-slate-800 px-4 py-2 rounded-md mt-5 shadow-2xl font-bold text-indigo-300">
      <button
        id="all"
        className={
          state === "all" ? "text-indigo-900 dark:text-indigo-500" : ""
        }
        onClick={() => {
          all();
          setState("all");
        }}
      >
        All
      </button>
      <button
        id="active"
        className={
          state === "active" ? "text-indigo-900 dark:text-indigo-500" : ""
        }
        onClick={() => {
          active();
          setState("active");
        }}
      >
        Active
      </button>
      <button
        id="completed"
        className={
          state === "completed" ? "text-indigo-900 dark:text-indigo-500" : ""
        }
        onClick={() => {
          completed();
          setState("completed");
        }}
      >
        Completed
      </button>
    </div>
  );
};
