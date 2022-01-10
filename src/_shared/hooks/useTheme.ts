import { useDispatch, useSelector } from "react-redux";
import { setTheme, themeSelector } from "_shared/store/core";

const useTheme = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(themeSelector);

  const changeTheme = () => {
    if (!!localStorage.theme) {
      localStorage.removeItem("theme");
      document.querySelector("body")?.classList.remove("bg-dark");
      document.documentElement.classList.remove("dark");
      dispatch(setTheme("light"));
    } else {
      localStorage.theme = "dark";
      document.querySelector("body")?.classList.add("bg-dark");
      document.documentElement.classList.add("dark");
      dispatch(setTheme("dark"));
    }
  };

  const checkTheme = () => {
    if (!!localStorage.theme) {
      dispatch(setTheme("dark"));
      document.querySelector("body")?.classList.add("bg-dark");
      document.documentElement.classList.add("dark");
    }
  };

  return { setTheme: changeTheme, checkTheme, currentTheme };
};

export { useTheme };
