import React, { useState } from 'react';
import NavMenu from './../nav-menu/NavMenu';
import './navbar.css';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

const Navbar = ()=>{
    const [toggleMenu, setToggleMenu] = useState(false);
    const switcMenu = ()=>{
        setToggleMenu(s=>!s);
        console.log(toggleMenu);
    }
    return (<nav className="navbar">
        <NavMenu />
        <div className="navbar__sandwich-menu">
            { toggleMenu ? 
                <RiCloseLine color="#000" size={27} onClick={ switcMenu } />
                : <RiMenu3Line color="#000" size={27} onClick={ switcMenu } />
            }
            { toggleMenu && ( <NavMenu />) }
        </div>
    </nav>);
}

export default Navbar;