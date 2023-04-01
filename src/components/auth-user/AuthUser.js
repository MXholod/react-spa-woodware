import React, { useContext } from 'react';
import './auth-user.css';
import { ApplicationContext } from '../../context/appContext';

const AuthUser = (props)=>{
    const appCtx = useContext(ApplicationContext);
    const { signUp: { login, password, email }, subscribeEmail } = appCtx.state;

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
        </div>
    </div>);
}

export default AuthUser;