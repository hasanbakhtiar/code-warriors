import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const LangContext = createContext();

export const LangProvider = ({children})=>{
    const [lang,setLang] = useState(localStorage.getItem("lang"));
    useEffect(()=>{
        if (localStorage.getItem('lang')===null) {
            localStorage.setItem('lang',"EN")
        }
    },[])
    return(<LangContext.Provider value={[lang,setLang]}>{children}</LangContext.Provider>)
}