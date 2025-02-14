import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className="toggle-container">
      <div 
        className={`toggle-switch ${darkMode ? "dark" : ""}`} 
        onClick={() => dispatch(toggleTheme())}
      >
        <div className="toggle-circle"></div>
      </div>
    </div>
  );
};

export default ThemeToggle;
