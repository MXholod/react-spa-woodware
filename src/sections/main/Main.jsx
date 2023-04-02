import React, { useState } from 'react';
import './main.css';
import { getFurniture } from './../../services/furnitureListService';

const Main = ()=>{
    const [furniture, setFurniture] = useState([]);
    const [toggleFurniture, setToggleFurniture] = useState(false);
    const [disable, setDisable] = useState(false);
    const [classes, setClasses] = useState(['main__button']);
    const handleToggleFurniture = ()=>{
        //If open
        if(toggleFurniture){
            setToggleFurniture(false);
            return false;
        }
        setDisable(true);
        setClasses(s=>{
            return [...s, 'main__button_disabled']
        });
        getFurniture(function(data){
            setFurniture(data);
            setToggleFurniture((s)=>{ return !s});
            setDisable(false);
            setClasses(s=>{
                return s.filter((el)=> el !== 'main__button_disabled')
            });
        });
    }

    return (<div className='main'>
        <div className='main__text'>
            <p>Are you looking for <b>woodden furniture</b> for your place?</p>
            <div>This is the Right Place</div>
            { furniture.length > 0 && toggleFurniture ? 
                <ul className='main__furniture'>
                {furniture.map((f)=>{
                    return (<li key={f.id}>{f.brand}</li>)
                })} 
            </ul> : null }
            <button disabled={ disable ? true : false }
                onClick={ handleToggleFurniture }
                className={ classes.join(' ') }>
                    { !toggleFurniture ? "Explore Furniture" : "Close furniture" }
            </button>
        </div>
        <div className='main__image'></div>
    </div>);
}

export default Main;