import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

function ThemeToggle() {
  const [loaded, setLoaded] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <button
      onClick={() => {
        console.log(`toggling theme from ${theme}`);

        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className="bg-sky-900 dark:bg-amber-500 w-12 h-12 rounded-full"
    ></button>
  );
}

export default ThemeToggle;
