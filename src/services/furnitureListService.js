const furnitureList = [
    {id:1, brand: "First brand"},
    {id:2, brand: "Second brand"},
    {id:3, brand: "Third brand"},
    {id:4, brand: "Fourth brand"},
    {id:5, brand: "Fifth brand"},
    {id:6, brand: "Sixth brand"},
    {id:7, brand: "Seventh brand"},
    {id:8, brand: "Eighth brand"},
    {id:9, brand: "Ninth brand"}
];

export function getFurniture(cb){
    setTimeout(()=>{
        cb(furnitureList);
    },3000);
}