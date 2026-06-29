"use client";

import { createContext, useContext, useState } from "react";
import i18n from "../il8n";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    JSON.stringify(localStorage.setItem("lang", newLang));
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        toggleLang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
