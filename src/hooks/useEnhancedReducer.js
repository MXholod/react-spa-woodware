import { useReducer  } from 'react';

export const useEnhancedReducer = ()=>{
    let appState = null;
    appState = JSON.parse(window.localStorage.getItem('appState'));
    
    if(appState === null){
        appState = {
            'signUp': { login: '', password: '', email: '' },
            'signIn': { login: '', password: '' },
            'subscribeEmail': ''
        };
    }

    const reducer = (state, action)=>{
        const { type, ...data } = action;
        let newState = null;
        switch(action.type){
            case 'signup' : 
                newState = Object.assign({}, state, data);
                window.localStorage.setItem('appState', JSON.stringify(newState));
                return newState;
            case 'signin' : 
                newState = Object.assign({}, state, data);
                window.localStorage.setItem('appState', JSON.stringify(newState));
                return newState;
            case 'subscribe' : 
                newState = { ...state, subscribeEmail: action.data };
                window.localStorage.setItem('appState', JSON.stringify(newState));
                return newState;
            default: return state;
        }
    }
    //Reducer, Initial State
    const [state, dispatch] = useReducer(reducer, appState);
    return {
        state, dispatch
    }
}