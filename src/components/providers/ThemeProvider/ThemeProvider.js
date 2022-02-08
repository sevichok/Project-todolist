import React, { useState, useCallback, createContext, useContext, useEffect } from 'react';
import {
    ThemeProvider as StyledThemeProvider,
    createGlobalStyle,
} from "styled-components";
import { lightTheme, darkTheme } from "./ThemeConstants";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor.main};
  }
`;

const ThemeContext = createContext({});
export const useTheme = () => useContext(ThemeContext);

const themeLocalStorage = JSON.parse(localStorage.getItem("theme") || "[]");

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(themeLocalStorage);
    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === "lightTheme" ? "darkTheme" : "lightTheme"));
    }, []);

    useEffect(() => { 
        localStorage.setItem("theme", JSON.stringify(theme))
    }, [theme]);

    return (
        <StyledThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
            <GlobalStyle />
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        </StyledThemeProvider>
    )
};
export default ThemeProvider;
