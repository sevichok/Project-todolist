import React, { createContext, useState, useCallback, useContext } from "react";
import { langs } from "./Translations";

const LocalesContext = createContext({});
export const useLocales = () => useContext(LocalesContext);

const LocalesProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ru" : "en"));
  }, []);

  return (
    <LocalesContext.Provider value={{ trans: langs[lang], toggleLang }}>
      {children}
    </LocalesContext.Provider>
  );
};
export default LocalesProvider