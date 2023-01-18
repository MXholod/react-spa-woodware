import React, { useState, useEffect } from 'react';
import './categories.css';
import { getCategories } from './../../services/categoriesService';

const Categories = ()=>{
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        getCategories(function(data){
            setCategories(data);
        });
    },[]);

    const handleCategory = (categoryId)=>{
        console.log("Category id: ",categoryId);
    }

    return (<section className="categories">
        <div className="categories__block">
            <ul className="categories__items">
            { !!categories.length && categories.map(category => {
                let align = category.align === 'auto' ? 
                    '0 auto' : `0 0 0 ${category.align}`;
                return (<li key={ category.id } className="categories__item">
                    <div className="categories__title">{ category.title }</div>
                    <div className="categories__image" 
                        style={ 
                            { margin: align }  
                        }>
                        <img src={require(`./../../assets/categories/${category.img}`)} 
                        alt={`Category ${category.title}`} />
                    </div>
                    <button onClick={ ()=>handleCategory(category.id) }
                        className="categories__button">
                        Shop Now
                    </button>    
                </li>);
            }) }
            </ul>
        </div>
    </section>);
}

export default Categories;