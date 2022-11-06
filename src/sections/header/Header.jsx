import React from 'react';
import './header.css';

const Header = (props)=>{
    return (<div className='header'>
        <div className='logo'>Woodies</div>
        { props.children }
    </div>);
}

export default Header;