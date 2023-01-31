import React, { createContext, useState } from 'react';


export const ApplicationContext = createContext();

const AppContext = ({ children })=>{
    const [toggleSignUp, setToggleSignUp] = useState(false); 
    const [toggleSignIn, setToggleSignIn] = useState(false); 
    return (<ApplicationContext.Provider value={ {
        toggleSignUp, setToggleSignUp, toggleSignIn, setToggleSignIn
        } }>
        { children }
    </ApplicationContext.Provider>);
}

export default AppContext;