import React, { useContext, useState, useEffect } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import './nav-menu.css';
import { handleNavMenu } from './../../utils/handle-menu-buttom';
import { ApplicationContext } from '../../context/appContext';
import { isAuth } from './../../utils/check-auth-in-service';

const NavMenu = ()=>{
    const appCtx = useContext(ApplicationContext);
    const { state, dispatch } = appCtx;
    const [isAuthed, setIsAuthed] = useState(false);

    const handleSignUp = ()=>{
        appCtx.setToggleSignUp(true);
    }
    const handleSignIn = ()=>{
        appCtx.setToggleSignIn(true);
    }

    const handleUserAuth = ()=>{
        appCtx.setToggleAuth(true);
    }
    
    useEffect(()=>{
        const { login: lsUp, password: psUp } = state.signUp;
        const { login: lsIn, password: psIn } = state.signIn;
        //Sign(UP/IN) If user's data have already in: state, localStorage, Service  
        if(JSON.parse(window.localStorage.getItem('appState')) !== null){
            //It just simulates the Sign up process
            if((lsUp !== '' && psUp !== '') && (lsIn === '' && psIn === '')){
                const fetchData = async ()=>{
                    const auth = await isAuth(lsUp, psUp);
                    setIsAuthed(auth); //true or false
                }
                fetchData().catch(console.error);
            }
            //It just simulates the Sign in process
            if(lsIn !== '' && psIn !== ''){
                setIsAuthed(true); //true or false
            }
        }
        
    },[state.signUp, state.signIn]);
    

    return (<>
        <ul className="nav-menu">
            <li><AiOutlineHome />
                <a href="#home" onClick={ handleNavMenu }>Home</a>
            </li>
            <li>
                <a href="#aboutus" onClick={ handleNavMenu }>About us</a>
            </li>
            <li>
                <a href="#howitworks" onClick={ handleNavMenu }>How it works</a>
            </li>
            <li>
                <a href="#categories" onClick={ handleNavMenu }>Categories</a>
            </li>
            <li>
                <a href="#testimony" onClick={ handleNavMenu }>Testimony</a>
            </li>
            <li>
                { isAuthed ? 
                <ul>
                    <li><button onClick={ handleUserAuth }>User details</button></li>
                    <li><button onClick={ ()=>console.log('Log out') }>Log out</button></li>
                </ul> :
                <ul>
                    <li><button onClick={ handleSignUp }>Sign up</button></li>
                    <li><button onClick={ handleSignIn }>Sign in</button></li>
                </ul> }
            </li>
        </ul>
    </>);
}

export default NavMenu;