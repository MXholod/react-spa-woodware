import React from 'react';
import './navbar.css';
import { AiOutlineHome } from 'react-icons/ai';

const Navbar = ()=>{
    return (<nav className="navbar">
        <ul>
            <li><AiOutlineHome /><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Testimony</a></li>
        </ul>
    </nav>);
}

export default Navbar;