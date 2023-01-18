const howItWorks = [
    { id:1, title: "Choose Design" },
    { id:2, title: "Area measuring" },
    { id:3, title: "Budgeting" },
    { id:4, title: "Production" }
];

export function gethowItWorks(cb){
    setTimeout(()=>{
        return cb(howItWorks);
    }, 3000);
}