const testimonyReviews = [
    { 
        id: 1, 
        author: 'Dave Annable', 
        avatar: '',
        text: 'From customed furniture, range of product, modern design, purchasing experience, the delivery and newsletter. Litterally everything is great. Thank you!', 
        rating: 4 
    },
    { 
        id: 2, 
        author: 'John Williams', 
        avatar: '',
        text: 'My experience with WOODIES is a complete success, from customed furniture, range of product', 
        rating: 3 
    },
    { 
        id: 3, 
        author: 'Kylie Smith', 
        avatar: '', 
        text: 'There is a range of products, modern design, purchasing experience, the delivery and newsletter. Litterally everything is great.',
        rating: 5 
    },
    { 
        id: 4, 
        author: 'Kylie Smith 2', 
        avatar: '', 
        text: 'There is a range of products, modern design, purchasing experience, the delivery and newsletter. Litterally everything is great.',
        rating: 1 
    }
];

export function getTestimonyReviews(cb){
    setTimeout(()=>{
        cb(testimonyReviews);
    },3000);
}