import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import DarkMood from "./darkMood";
function Header() {
  const [colorTheme, setColorTheme] = DarkMood();
  const [darkside, setDarkside] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = () => {
    setColorTheme(colorTheme);
    setDarkside(!darkside);

    console.log(colorTheme);
  };
  return (
    <div className="max-w-[1400px] mx-auto ">
      <div className="flex  gap-x-100  px-10 py-5 ">
        <p className="font-bold">Your Name</p>
        <nav className="flex gap-20">
          <a href="">
            <ol>Blog</ol>
          </a>
          <a href="">
            <ol>Project</ol>
          </a>
          <a href="">
            <ol>About</ol>
          </a>
          <a href="">
            <ol>Newsletter</ol>
          </a>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full border transition"
          >
            {darkside ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-800" />
            )}
          </button>
        </nav>
      </div>
      <div className="flex items-center justify-center mt-3 mb- ">
        <div className="border-t border-black w-[1200px] "></div>
      </div>

      <h1 className="font-bold text-[10rem] flex items-center justify-center w-full">
        THE BLOG
      </h1>

      <div className="flex items-center justify-center mt-">
        <div className="border-t border-black w-[1200px] "></div>
      </div>
    </div>
  );
}

export default Header;
