import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const DarkMood = () => {
  const [theme, setTheme] = useState(localStorage.theme || "dark");
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [theme, setTheme];
};

export default DarkMood;
