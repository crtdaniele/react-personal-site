import { useState } from "react";

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<string | null>("light");

  const setTheme = () => {
    if (!!localStorage.theme) {
      localStorage.removeItem("theme");
      document.querySelector("body")?.classList.remove("bg-dark");
      document.documentElement.classList.remove("dark");
      setCurrentTheme("light");
    } else {
      localStorage.theme = "dark";
      document.querySelector("body")?.classList.add("bg-dark");
      document.documentElement.classList.add("dark");
      setCurrentTheme("dark");
    }
  };

  const checkTheme = () => {
    if (!!localStorage.theme) {
      setCurrentTheme("dark");
      document.querySelector("body")?.classList.add("bg-dark");
      document.documentElement.classList.add("dark");
    }
  };

  return { setTheme, checkTheme, currentTheme };
};

export { useTheme };
