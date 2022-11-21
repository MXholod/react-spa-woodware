import React from 'react';
import './main.css';

const Main = ()=>{
    return (<div className='main'>
        <div className='main__text'>
            <p>Are you looking for <b>woodden furniture</b> for your place?</p>
            <div>This is the Right Place</div>
            <button className='main__button'>Explore Furniture</button>
        </div>
        <div className='main__image'></div>
    </div>);
}

export default Main;