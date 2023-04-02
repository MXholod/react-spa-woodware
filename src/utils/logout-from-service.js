import { userLogout } from './../services/authService';

const logout = async (login, password)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const userData = userLogout(login, password);
            if(userData){
                resolve(true);
            }
            resolve(false);
        },3000);
    });
}

export { logout };