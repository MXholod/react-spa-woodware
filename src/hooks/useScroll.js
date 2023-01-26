import { useState, useEffect } from 'react';

export const useScroll = ()=>{
    const [scroll, setScroll] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', scrolllHandler);
        return ()=>{
            window.removeEventListener('scroll', scrolllHandler);
        }
    });
    const scrolllHandler = (e)=>{
        //let html = document.documentElement;
        //let body = document.body;
        //let docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        let initHeight = window.innerHeight;
        let currentY = window.scrollY; 
        if(currentY > initHeight){
          setScroll(true);
        }else{
          setScroll(false);
        }
    }
    return scroll;
}