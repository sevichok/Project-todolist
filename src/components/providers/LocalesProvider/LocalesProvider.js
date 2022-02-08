import React, { createContext, useState, useCallback, useContext, useEffect } from "react";
import { langs } from "./Translations";

const LocalesContext = createContext({});
export const useLocales = () => useContext(LocalesContext);

const langLocalStorage = JSON.parse(localStorage.getItem("lang") || "[]");

const LocalesProvider = ({ children }) => {
  const [lang, setLang] = useState(langLocalStorage);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ru" : "en"));
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(lang))
  }, [lang]);


  return (
    <LocalesContext.Provider value={{ trans: langs[lang], toggleLang }}>
      {children}
    </LocalesContext.Provider>
  );
};
export default LocalesProvider