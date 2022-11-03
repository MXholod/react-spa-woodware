import React from 'react';
import './header.css';

const Header = (props)=>{
    return (<div>
        { props.children }
        <h1>Header</h1>
    </div>);
}

export default Header;