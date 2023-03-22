import React, { useEffect, useContext } from 'react';
import { ApplicationContext } from '../../context/appContext';
import { authUser, compareToSignIn } from './../../services/authService'; 

const withQuerySign = (Component)=>{
    return (props)=>{
        const appCtx = useContext(ApplicationContext);
        const { state, dispatch } = appCtx;
        useEffect(()=>{
            //Save into Service
            authUser(function(userData){
                if(props.auth === 'signup'){
                    //console.log("From server ",getAuth());
                    return {'signUp': { ...userData.signUp, ...state.signUp } };
                }
                if(props.auth === 'signin'){
                    //console.log("From server ",getAuth());
                    return {'signIn': { ...userData.signIn, ...state.signIn } };
                }
            });
        },[props.auth, state.signUp, state.signIn]);

        //The function invokes when click on submit
        function toReducer(type, data){
            //Make key from 'signup' -> 'signUp' or 'signin' -> 'signIn'
            //const key = type.replace(type[4], type[4].toUpperCase());
            let key = type.slice(0, 4) + type[4].toUpperCase() + type.slice(5,type.length);
            if(key === 'signUp'){
                dispatch({ type, [key]: data });
            }else{// 'signIn'
                const userData = JSON.parse(window.localStorage.getItem('appState'));
                let login = '', password = '';
                if(userData !== null){
                    login  = userData.signUp.login;    
                    password  = userData.signUp.password;    
                }
                // User in DB - 'authService'
                if(compareToSignIn(data) || (login !== '' && password !== '')){
                    dispatch({ type, [key]: data });
                }else{
                    console.log("User hasn't signed up!");
                    return false;
                }
            }
            return true;
        }

        return (<>
            <Component toReducer={ toReducer } state={ state } />
        </>);
    }
}

export default withQuerySign;