import React from 'react';
import './testimony-reviews-navigation.css';

const TestimonyReviewsNavigation = (props)=>{
    return (<div className="testimony-navigation">
        <nav className="testimony-navigation__navs">
            <button onClick={ ()=>props.goByComments(-1) }>Previous</button>
            <button onClick={ ()=>props.goByComments(1) }>Next</button>
        </nav>
        <div className="testimony-navigation__actives">
            { Array.from(Array(props.totalComments).keys()).map((item, ind)=>(
                props.order === (ind+1) ? 
                    <span className="active" key={ind}></span> : 
                    <span className="inactive" key={ind}></span> 
            )) }
        </div>
    </div>);
}

export default TestimonyReviewsNavigation;