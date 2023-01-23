import React, { useState, useEffect, useRef } from 'react';
import './testimony.css';
import TestimonyReviews from '../../components/testimony-reviews/TestimonyReviews';
import { getTestimonyReviews } from './../../services/testimonyReviewsService';
import TestimonyReviewsNavigation from '../../components/testimony-reviews-navigation/TestimonyReviewsNavigation';

const Testimony = ()=>{
    const totalComments = useRef(0);
    const [comment, setComment] = useState(null);
    const [order, setOrder] = useState(0);
    const [letMove, setLetMove] = useState(false);

    useEffect(()=>{
        getTestimonyReviews(function(data){
            if(data.length > 0){
                setComment(data[0]);
                setOrder(1);
                totalComments.current = data.length;
            }
        });
    },[]);
    useEffect(()=>{
        //Set 'true' to ignore clicking on 'prev' 'next' buttons
        setLetMove(true);
        getTestimonyReviews(function(data){
            if(order > data.length){
                setOrder(1);
                return setComment(data[0]);
            }
            const comment = data.filter(comment => comment.id === order);
            setComment(comment[0]);
            //Set 'false' to let clicking on 'prev' 'next' buttons
            setLetMove(false);
        });
    },[order]);

    const goByComments = (num)=>{
        //Let change order if the Response has come
        if(letMove) return;
        setOrder(s =>{
            if(num === -1){//Go previous
                if(order === 1){
                    return totalComments.current;
                }else{
                    return s += num;
                }
            }else{//Go forward
                if(order === totalComments.current){
                    return 1;
                }else{
                    return s += 1;
                }
            }
        });
    }

    return (<section className="testimony">
        <div className="testimony__block">
            <div className="testimony__images">
                <div>
                <img src={require('./../../assets/s_1_testimony.png') }
                    alt="Testimony furniture" />
                </div>
                <div>
                <img src={require('./../../assets/s_2_testimony.png') }
                    alt="Testimony furniture" />
                </div>
            </div>
            <div className="testimony__reviews">
                <TestimonyReviews toggleLoader={ letMove } comment={ comment } />
                <TestimonyReviewsNavigation
                    goByComments={ goByComments }
                    totalComments={ totalComments.current }
                    order={ order }
                />
            </div>
        </div>
    </section>);
}

export default Testimony;