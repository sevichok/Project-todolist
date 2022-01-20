import React, { useState, useCallback, createContext, useContext } from 'react';
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

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("lightTheme");
    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === "lightTheme" ? "darkTheme" : "lightTheme"));
    }, []);

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
