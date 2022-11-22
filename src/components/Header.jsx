import React from "react";
import { useThemeContext } from "../context/ThemeContext";
import sun from "../assets/img/icon-sun.svg";
import moon from "../assets/img/icon-moon.svg";

export const Header = () => {
  const { darkTheme, toggleTheme } = useThemeContext();
  return (
    <div className="flex flex-row justify-between items-start">
      <div>
        <h1 className=" text-white font-bold tracking-widest text-xl sm:text-3xl">
          TODO
        </h1>
      </div>
      <div>
        <button
          className="hover:scale-125 transition duration-300 ease-in-out"
          onClick={() => toggleTheme()}
        >
          {darkTheme ? (
            <img src={sun} alt="sun" />
          ) : (
            <img src={moon} alt="moon" />
          )}
        </button>
      </div>
    </div>
  );
};
