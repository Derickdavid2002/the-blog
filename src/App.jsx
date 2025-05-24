import React from "react";
import LandingPage from "./landing-page/landing";
import DarkMood from "./landing-page/darkMood";
import { useState } from "react";





function App() {
const [colorTheme, setTheme] = DarkMood(); 
const [darkside, setDarkside] = useState(colorTheme === 'light' ? true : false); 

const toggleDarkMode = () => {
  newTheme = colorTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  setDarkside(!darkside);
  return (
    <div>
      <LandingPage />
    </div>
  )
}
}
export default App;
