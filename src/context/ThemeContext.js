import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({});

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };
  return (
    <>
      <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
