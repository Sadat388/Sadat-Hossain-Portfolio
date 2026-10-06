import { useState, useEffect } from "react";
export default function useTheme() {
  const [theme, setTheme] = useState("dark"); // null = follow system
  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme;
  }, [theme]);
  const toggle = () => {
    const dark = theme
      ? theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(dark ? "light" : "dark");
  };
  return toggle;
}
