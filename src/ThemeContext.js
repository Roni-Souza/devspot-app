
import React, { createContext, useContext, useState } from 'react';
import { DARK_COLORS, LIGHT_COLORS } from './theme';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  function toggleTheme() {
    setIsDark((previous) => !previous);
  }

  const colors = isDark ? DARK_COLORS : LIGHT_COLORS;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useAppTheme precisa estar dentro de ThemeProvider.'
    );
  }

  return context;
}
