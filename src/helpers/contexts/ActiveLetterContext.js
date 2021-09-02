import React from "react";

export const ActiveLetterContext = React.createContext(null);
export const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function ActiveLetterProvider ({ children }) {
    const [activeLetter, setActiveLetter] = React.useState(letters[0]);

    return(
        <ActiveLetterContext.Provider value={{activeLetter, setActiveLetter}}>
            {children}
        </ActiveLetterContext.Provider>
    );
}