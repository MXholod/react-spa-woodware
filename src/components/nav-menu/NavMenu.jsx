import React, { useContext } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import './nav-menu.css';
import { handleNavMenu } from './../../utils/handle-menu-buttom';
import { ApplicationContext } from '../../context/appContext';

const NavMenu = ()=>{
    const appCtx = useContext(ApplicationContext);

    const handleSignUp = ()=>{
        appCtx.setToggleSignUp(true);
    }
    const handleSignIn = ()=>{
        appCtx.setToggleSignIn(true);
    }

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
                <ul>
                    <li><button onClick={ handleSignUp }>Sign up</button></li>
                    <li><button onClick={ handleSignIn }>Sign in</button></li>
                </ul>
            </li>
        </ul>
    </>);
}

export default NavMenu;