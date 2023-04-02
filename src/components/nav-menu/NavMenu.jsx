import React, { useContext, useState, useEffect } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import './nav-menu.css';
import { handleNavMenu } from './../../utils/handle-menu-buttom';
import { ApplicationContext } from '../../context/appContext';
import { isAuth } from './../../utils/check-auth-in-service';
import { logout } from './../../utils/logout-from-service';

const NavMenu = ()=>{
    const appCtx = useContext(ApplicationContext);
    const { state, dispatch } = appCtx;
    const [isAuthed, setIsAuthed] = useState(false);
    const [disable, setDisable] = useState(false);
    const [classes, setClasses] = useState([' hi ']);

    const handleSignUp = ()=>{
        appCtx.setToggleSignUp(true);
    }
    const handleSignIn = ()=>{
        appCtx.setToggleSignIn(true);
    }

    const handleUserAuth = ()=>{
        appCtx.setToggleAuth(true);
    }
    
    const handleUserLogOut = ()=>{
        logout(state.signUp.login, state.signUp.password).then((data)=>{
            //If a user is cleared in the Service
            if(data){
                dispatch({ type: "logout" });
            }else{
                console.log("User cant't be logout");
            }
        });
    }

    useEffect(()=>{
        const { login: lsUp, password: psUp } = state.signUp;
        const { login: lsIn, password: psIn } = state.signIn;
        //Sign(UP/IN) If user's data have already in: state, localStorage, Service  
        if(JSON.parse(window.localStorage.getItem('appState')) !== null){
            //It just simulates the Sign up process
            if((lsUp !== '' && psUp !== '') && (lsIn === '' && psIn === '')){
                setDisable(true);
                setClasses((s)=>[...s, 'nav-menu__button_disabled']);
                const fetchData = async ()=>{
                    const auth = await isAuth(lsUp, psUp);
                    setIsAuthed(auth); //true or false
                    setDisable(false);
                    setClasses((s)=> s.filter(el => el !== 'nav-menu__button_disabled'));
                }
                fetchData().catch(console.error);
            }
            //It just simulates the Sign in process
            if(lsIn !== '' && psIn !== ''){
                setIsAuthed(true);
            }
            //Logout the user
            if(lsIn === '' && psIn === ''){
                setIsAuthed(false);
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
                    <li><button onClick={ handleUserLogOut }>Log out</button></li>
                </ul> :
                <ul>
                    <li>
                        <button className={ classes.join(' ') }
                            onClick={ handleSignUp }
                            disabled={ disable }
                            >
                                Sign up
                        </button>
                    </li>
                    <li>
                        <button 
                            className={ classes.join(' ') }
                            onClick={ handleSignIn }
                            disabled={ disable }
                            >
                                Sign in
                        </button>
                    </li>
                </ul> }
            </li>
        </ul>
    </>);
}

export default NavMenu;