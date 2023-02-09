import { useContext, createContext, useState } from "react";

const DarkModeContext = createContext() //Crear mi contexto
export const useDarkModeContext = () => useContext(DarkModeContext) //Me permite utilizar mi contexto

export const DarkModeProvider = (props) => { //Defino mi proveedor del contexto
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        if(!darkMode) {
            document.body.firstElementChild.classList.add('darkMode')
        } else {
            document.body.firstElementChild.classList.remove('darkMode')
        }
    }
    console.log(darkMode)
    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
                {props.children}
        </DarkModeContext.Provider>
    )
}

//export {useDarkModeContext, DarkModeProvider}