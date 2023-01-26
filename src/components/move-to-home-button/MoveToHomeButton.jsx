import React from 'react';
import './move-to-home-button.css';
import { handleNavMenu } from './../../utils/handle-menu-buttom';

const MoveToHomeButton = ()=>{

    return (<button data-home-button="home" 
        className="move-home-button" onClick={ handleNavMenu }>
        Home
    </button>);
}

export default MoveToHomeButton;