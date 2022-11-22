import { useEffect } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { useThemeContext } from "./context/ThemeContext";

function App() {
  const { darkTheme } = useThemeContext();
  useEffect(() => {
    darkTheme
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [darkTheme]);

  return (
    <>
      <main className="container flex flex-col min-h-screen items-center px-5 pt-10 sm:pt-20 text-indigo-900 dark:text-indigo-200">
        <div className="flex flex-col space-y-8 w-full sm:w-md sm:max-w-lg">
          <Header />
          <CreateTodo />
          <TodoList />
        </div>
      </main>
    </>
  );
}

export default App;
