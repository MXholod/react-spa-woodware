import React, { createContext, useState } from 'react';
import { useEnhancedReducer } from './../hooks/useEnhancedReducer';

export const ApplicationContext = createContext();

const AppContext = ({ children })=>{
    const [toggleSignUp, setToggleSignUp] = useState(false); 
    const [toggleSignIn, setToggleSignIn] = useState(false); 
    const [toggleAuth, setToggleAuth] = useState(false);
    const { state, dispatch } = useEnhancedReducer();
    return (<ApplicationContext.Provider value={ {
        toggleSignUp, setToggleSignUp, 
        toggleSignIn, setToggleSignIn, 
        toggleAuth, setToggleAuth,
        state, dispatch,
        } }>
        { children }
    </ApplicationContext.Provider>);
}

export default AppContext;