const categories = [
    { id: 1, title: "Desk", img: 'table.png', align: '10%' },
    { id: 2, title: "Chair", img: 'chair.png', align: 'auto' },
    { id: 3, title: "Kitchenware", img: 'bowls.png', align: 'auto' },
    { id: 4, title: "Book Shelf", img: 'shelf.png', align: 'auto' },
    { id: 5, title: "Electronics", img: 'radio.png', align: 'auto' }
];

export function getCategories(cb){
    setTimeout(()=>{
        cb(categories);
    },3000);
}