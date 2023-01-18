import React, { useState, useEffect } from 'react';
import './how-it-works.css';
import { gethowItWorks } from './../../services/howItWorksService';

const HowItWorks = ()=>{
    const [modalToggle, setModalToggle] = useState(false);
    const [items, setItems] = useState([]);
    const handleButton = ()=>{ 
        setModalToggle(s => !s);
    }
    useEffect(()=>{
        if(modalToggle){
            gethowItWorks(function(data){
                setItems(data);
            })
        }else{
            setItems([]);
        }    
    },[modalToggle]);
    return (<section className="how-it-works">
        <div className="how-it-works__desigions">
            { modalToggle &&  <ul className="how-it-works__modal">
                { !!items.length && items.map(item => {
                    return (<li key={ item.id }>
                        <label>{ item.title } 
                            <input type="checkbox" value={item.id} />
                        </label>
                    </li>)
                }) }
            </ul>
            }
            <div className="how-it-works__desigions-items">
                <div className="how-it-works__item"></div>
                <div className="how-it-works__item"></div>
                <div className="how-it-works__item"></div>
                <div className="how-it-works__item"></div>
            </div>
            <button onClick={ handleButton } className="how-it-works__btn">
                Get Personalized Now
            </button>
        </div>
    </section>);
}

export default HowItWorks;