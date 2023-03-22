import React, { useState, useContext, useEffect } from 'react';
import './signUpForm.css';
import { ApplicationContext } from '../../context/appContext';

const SignUpForm = (props)=>{
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passConfirmed, setPassConfirmed] = useState('');
    const [email, setEmail] = useState('');
    const [incorrect, setIncorrect] = useState(false);
    const appCtx = useContext(ApplicationContext);

    useEffect(()=>{
        if(props.state.signUp.login !== '' && props.state.signUp.password !== ''){
            //Close dialog window
            appCtx.setToggleSignUp(false);
        }
    },[props.state.signUp, appCtx]);

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
    const handlePassConfirmed = (e)=>{
        setPassConfirmed(e.target.value);
    }

    const handleEmail = (e)=>{
        if(e.target.value.length >= 0){
            setEmail(s => e.target.value);
        }
        return false;
    }

    const formHandler = (e)=>{
        e.preventDefault();
        const result = [false, false, false, false];
        if(login.length >= 3){
            result[0] = true;
        }else{ result[0] = false; }
        if(password.length >= 6){
            result[1] = true;
        }else{ result[1] = false; }
        if(password !== "" && password === passConfirmed){
            result[2] = true;
        }else{ result[2] = false; setPassConfirmed(''); }
        if(email.search(/[a-zA-Z0-9-_]+@([a-zA-Z]+)\.([a-zA-Z]{2,4})$/i) !== -1){
            result[3] = true;
        }else{ result[3] = false; }
        let i = 0;
        for(i; i < result.length; i++){
            if(!result[i]) break;
        }
        if(i === 4){
            //Pass data to the reducer
            setIncorrect(false);
            const signUp = { login: login, password: password, email: email };
            //dispatch({type:'signup', signUp});
            props.toReducer('signup', signUp);
        }else{
            //Entered data is incorrect
            setIncorrect(true);
        }
    }

    return (<div className="signup-form">
        <button onClick={ ()=>appCtx.setToggleSignUp(false) } className="signup-form__btn-close">
            Close
        </button>
        <form onSubmit={ formHandler } autoComplete="off">
            <label>Login (min 3 chars)
                <input type="text" onChange={ handleLogin } value={ login } />
            </label>
            <label>Pass (from 6 chars)
                <input type="password" onChange={ handlePassword } value={ password } />
            </label>
            <label>Confirm pass
                <input type="password" onChange={ handlePassConfirmed } value={ passConfirmed } />
            </label>
            <label>Email
                <input type="email" onChange={ handleEmail } value={ email } autoComplete="off" />
            </label>
            <input type="submit" />
        </form>
        { incorrect && <div className="signup-form__incorrect-data">
            Entered data is incorrect!
        </div> }
    </div>);
}

export default SignUpForm;