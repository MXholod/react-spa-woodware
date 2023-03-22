//This asynchronous function will be invoked in 'useEffect' hook
//It makes a request to the service to find out about the user's registration
import { getAuth } from './../services/authService';

const isAuth = async (login, password)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const userData = getAuth();
            if(userData.signUp.login === login && userData.signUp.password === password){
                resolve(true);
            }
            resolve(false);
        },3000);
    });
}

export { isAuth };