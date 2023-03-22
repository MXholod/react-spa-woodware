import React, { useState, useContext, useEffect } from 'react';
import './signInForm.css';
import { ApplicationContext } from '../../context/appContext';

const SignUpForm = (props)=>{
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [incorrect, setIncorrect] = useState(false);
    const appCtx = useContext(ApplicationContext);

    useEffect(()=>{
        if(props.state.signIn.login !== '' && props.state.signIn.password !== ''){
            //Close dialog window
            appCtx.setToggleSignIn(false);
        }
    },[props.state.signIn, appCtx]);

    const handleLogin = (e)=>{
        if(e.target.value.length >= 0){
            setLogin(s => e.target.value);
        }
        return false;
    }
    const handlePassword = (e)=>{
        if(e.target.value.length >= 0){
            setPassword(s => e.target.value);
        }
        return false;
    }

    const formHandler = (e)=>{
        e.preventDefault();
        const result = [false, false];
        if(login.length >= 3){
            result[0] = true;
        }else{ result[0] = false; }
        if(password.length >= 6){
            result[1] = true;
        }else{ result[1] = false; }
        let i = 0;
        for(i; i < result.length; i++){
            if(!result[i]) break;
        }
        if(i === 2){
            //Pass data to the reducer
            setIncorrect(false);
            const signIn = { login: login, password: password };
            const isAuth = props.toReducer('signin', signIn);
            if(!isAuth){
                setIncorrect(true);    
            }
        }else{
            //Entered data is incorrect
            setIncorrect(true);
        }
    }

    return (<div className="signin-form">
        <button onClick={ ()=>appCtx.setToggleSignIn(false) } className="signin-form__btn-close">
            Close
        </button>
        <form onSubmit={ formHandler } autoComplete="off">
            <label>Login
                <input type="text" onChange={ handleLogin } value={ login } />
            </label>
            <label>Password
                <input type="password" onChange={ handlePassword } value={ password } />
            </label>
            <input type="submit" />
        </form>
        { incorrect && <div className="signin-form__incorrect-data">
            Entered data is incorrect!
        </div> }
    </div>);
}

export default SignUpForm;