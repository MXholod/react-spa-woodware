import React from 'react';
import './header.css';
import logo from './../../assets/Logo.png';

const Header = (props)=>{
    return (<div className='header'>
        <div className='logo'><img src={logo} alt="logo" />
            Woodies
        </div>
        { props.children }
    </div>);
}

export default Header;