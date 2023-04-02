import React, { useContext, useEffect, useState } from 'react';
import './auth-user.css';
import { ApplicationContext } from '../../context/appContext';
import { getAuth } from './../../services/authService';

const AuthUser = (props)=>{
    const [subscribers, setSubscribers] = useState('');
    const appCtx = useContext(ApplicationContext);
    const { signUp: { login, password, email }, subscribeEmail } = appCtx.state;

    useEffect(()=>{
        const timer = setTimeout(()=>{
            const { subscribeEmail } = getAuth();
            setSubscribers(subscribeEmail.join(' - '));
        },2000);
        return ()=>{
            clearTimeout(timer);
        }
    },[]);

    const handleUserAuth = (e)=>{
        if(e.target.getAttribute("class") === "auth-user"){
            appCtx.setToggleAuth(false);
        }
    }

    return (<div className="auth-user" onClick={ handleUserAuth }>
        <div className="auth-user__panel">
        <p><b>Login:</b> {login}</p>
        <p><b>Email:</b> {email}</p>
        <p><b>Password:</b> {password}</p>
        <label>Are you { login } subscribed to our newsletter?
            <input 
                type="checkbox" 
                readOnly 
                className="auth-user__in-check" 
                checked={ subscribeEmail === '' ? false : true }
            />
        </label>
        { subscribers !== '' ? (<div><h3>All subscribers</h3>
        <p>{subscribers}</p></div>) : null }
        </div>
    </div>);
}

export default AuthUser;