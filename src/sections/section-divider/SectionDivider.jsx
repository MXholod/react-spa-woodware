import React from 'react';
import './section-divider.css';
import { AiOutlineLine } from 'react-icons/ai';
import logo from './../../assets/Logo.png';

const SectionDivider = (props)=>{
    return (<div id={ props.id } className='section-divider'>
        <img src={logo} alt="logo" width="25" height="25" />
        <span>
            {props.sectionDescription} 
            <AiOutlineLine className='section-divider__dash' /> 
            { props.sectionNameBelow }
        </span>
    </div>)
}

export default SectionDivider;