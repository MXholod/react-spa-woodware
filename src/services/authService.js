let userAuth = {
    'signUp': { login: '', password: '', email: '' },
    'signIn': { login: '', password: '' },
    'subscribeEmail': []
}

export function authUser(cb){
    setTimeout(()=>{
        const newData = cb(userAuth);
        if('signUp' in newData){
            //'signUp': { login: '', password: '', email: '' },
            userAuth = { 
                ...userAuth, 
                signUp: { ...newData.signUp },
            }
        }
        //console.log("Service");
    },2000);
}

export function getAuth(){
    return userAuth;
}

export function compareToSignIn(userData){
    // userData - { login: '', password: '' }
    const { login, password } = userAuth.signUp;
    if(userData.login === login && userData.password === password){
        //'signIn': { login: '', password: '' },
        userAuth = { 
            ...userAuth, 
            signIn: { ...userData }
        }
        return true;
    }
    return false;
}

export function userLogout(login, password){
    if(userAuth.signUp.login === login && userAuth.signUp.password === password){
        userAuth = {
            'signUp': { login: '', password: '', email: '' },
            'signIn': { login: '', password: '' },
            'subscribeEmail': []
        }
        return true;
    }
    return false;
}

export function subscribe(email){
    //Create copy of emails
    const emails = userAuth.subscribeEmail.concat();
    emails.push(email);
    userAuth = { ...userAuth, subscribeEmail: emails };
}