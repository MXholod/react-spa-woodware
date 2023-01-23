import React from 'react';
import './testimony-reviews.css';
import Loader from './../Loader/Loader.tsx';

const TestimonyReviews = ({ toggleLoader, comment })=>{
    const drawRating = (rating)=>{
        return Array.from(Array(rating).keys()).map((start, ind) => {
            return (<span className="testimony-reviews__star" key={ind }></span>)
        });
    }
    return (<div className="testimony-reviews">
        { toggleLoader ? <Loader /> : null }
        <div className="testimony-reviews__rating">
            {comment && drawRating(comment.rating) }
        </div>
        <div className="testimony-reviews__comment">
            <p>{comment && comment.text}</p>
        </div>
        <div className="testimony-reviews__author">
            <p>{comment && comment.author}</p>
        </div>
    </div>)
}

export default TestimonyReviews;
