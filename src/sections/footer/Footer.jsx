import React, { useState, useContext, useEffect } from 'react';
import './footer.css';
import logo from './../../assets/Logo.png';
import { ApplicationContext } from '../../context/appContext';
import { subscribe, getAuth } from './../../services/authService';

const Footer = ()=>{
    const [value, setValue] = useState('');
    const appCtx = useContext(ApplicationContext);
    const { state, dispatch } = appCtx;
    
    useEffect(()=>{
        const timeer = setTimeout(()=>{
            const { signUp: { login, password } } = getAuth();
            if(value !== '' && login !== '' &&  password !== ''){
                subscribe(value);
                alert('You\'ve subscribed, see your email in the user panel');
                setValue('');
            }else if(value !== ''){
                alert('You\'ve successfully subscribed');
                setValue('');
            }
        },3000);
        return ()=>{
            clearTimeout(timeer);
        }
    },[state.subscribeEmail]);

    const handleInput = (e)=>{
        setValue(s => e.target.value);
    }
    const handleSubscribe = ()=>{
        if(value.length === 0){
            alert('You should input an email');
            return false;
        }
        let reg = /[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]{2,4}$/i;
        if(value.search(reg) === -1){
            alert('Email format is incorrect!');
        }else{
            dispatch({ type: 'subscribe', data: value });
        }
    }

    return (<div className="footer">
        <div className="footer__subscribe-text">
            <h3>Subscribe to our newsletter</h3>
            <p>A monthly digest of the new WOODIES products, hot offers, and resources.</p>
        </div>
        <div className="footer__subscribe-field">
            <input type="email" 
                value={ value } 
                onChange={ handleInput }
                placeholder="Your email address"
             />
            <input type="button" 
                value="Subscribe" 
                onClick={ handleSubscribe }
            />
        </div>
        <div className="footer__lists">
            <div className='footer__info'>
                <div className='footer__brand'>
                    <img src={logo} alt="logo" width="25" height="25" />
                    <span>Woodies</span>
                </div>
                <div className='footer__contacts'>
                    <span>(000) 000 00 00</span>
                    <span>woodies@gmail.com</span>
                    <span>Kyiv, Ukraine</span>
                </div>
            </div>
            <ul>
                <li>Product</li>
                <li>Furnitures</li>
                <li>Packages</li>
                <li>Services</li>
            </ul>
            <ul>
                <li>Resources</li>
                <li>Blog</li>
                <li>FAQs</li>
                <li>Contact Us</li>
            </ul>
            <ul>
                <li>Company</li>
                <li>About Us</li>
                <li>Jobs</li>
                <li>Our Team</li>
            </ul>
            <ul>
                <li>Follow Us</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
            </ul>
        </div>
        <p className="footer__date">&copy; { new Date().getFullYear() }</p>
    </div>);
}

export default Footer;