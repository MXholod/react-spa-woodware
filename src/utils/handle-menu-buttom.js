export const handleNavMenu = (e)=>{
    e.preventDefault();
    if(e.target.tagName === 'A'){
        let hrefWithHash = e.target.getAttribute('href');
        let hrefVlue = hrefWithHash.slice(1, hrefWithHash.length);
        if(hrefVlue === 'home') return false;
        const element = document.getElementById(hrefVlue);
        element.scrollIntoView();
        return true;
    }else{// e.target.tagName === 'BUTTON'
        //let buttonVal = e.target.getAttribute('data-home-button');
        let buttonVal = e.target.dataset.homeButton;
        if(buttonVal === 'home'){
            const home = document.getElementsByClassName('main')[0];
            home.scrollIntoView();
            return true;
        }
    }
}