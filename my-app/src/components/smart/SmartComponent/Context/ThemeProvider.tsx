import React, { useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; toggleTheme: () => void };

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const backgroundColor =
    theme === "light" ? "rgba(216, 255, 133, 0.8)" : "rgba(129, 173, 199, 0.5)";
  const themedEl = document.querySelector<HTMLElement>(".authForm");

  useEffect(() => {
    if (themedEl !== null) {
      themedEl!.style.backgroundColor = backgroundColor;
    }
  });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
