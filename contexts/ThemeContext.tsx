import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const ThemeContext = createContext({
  isDarkMode: true,
  toggleDarkMode: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      // Initialize state from localStorage
      const savedTheme = localStorage.getItem('isDarkMode');
      return savedTheme ? JSON.parse(savedTheme) : false;
    }
    return false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode: boolean) => {
      const newMode = !prevMode;
      if (typeof window !== 'undefined') {
        localStorage.setItem('isDarkMode', JSON.stringify(newMode)); // Save to localStorage
      }
      return newMode; // Return the new state
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Sync with localStorage on mount
      const savedTheme = localStorage.getItem('isDarkMode');
      if (savedTheme) {
        setIsDarkMode(JSON.parse(savedTheme));
      }
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);