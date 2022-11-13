import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import './nav-menu.css';

const NavMenu = ()=>{
    return (<>
        <ul className="nav-menu">
            <li><AiOutlineHome /><a href="#home">Home</a></li>
            <li><a href="#aboutus">About us</a></li>
            <li><a href="#howitworks">How it works</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#testimony">Testimony</a></li>
            <li>
                <ul>
                    <li><button>Sign up</button></li>
                    <li><button>Sign in</button></li>
                </ul>
            </li>
        </ul>
    </>);
}

export default NavMenu;