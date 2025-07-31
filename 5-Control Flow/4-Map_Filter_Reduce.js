const coding = ["JS", "Python", "C++", "Java", "C#"];

// const value = coding.forEach((item)=>{       // forEach does not return anything
//     return item;
// })
// console.log(value);

// In order to return a value conditionally we use filter

const arr = [1,2,3,4,5,6,7,8,9,10];
// const values = arr.filter((item)=> item>5);     //Return a filtered array
// This was singleline return condition
// It can also be wriiten as
// const values = arr.filter(item => item>5);
//or
// const values = arr.filter(item => {return item>5});
// or 
const values = arr.filter((item) => {
    return item>5
});

console.log(values);    

// Real life useage of filters
//Books array of objects
const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        year: 1925
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        year: 1949
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        year: 1813
    }
];

const condition = books.filter((item)=>{
    return item.year>1940 && item.genre ==="Classic";       // Applyinng multiple filters
})

console.log(condition);


// Map
const nums = [1,2,3,4,5,6,7,8,9,10];
const double = nums.map((num)=> num*2);
console.log(double);

//chaining
const result = nums
                .map((num)=> num*2)
                .filter((num)=> num>12);    // we can also chain map and map
console.log(result);

// Reduce
const mynums = [1,2,3,4];
const sum = mynums.reduce((acc, cur)=> acc+cur);      // Includes 2 parameters accumulator and current
console.log(sum);

const initialValue = 5;
const num2 = mynums.reduce((acc, curr)=>{
    return acc+curr;
},initialValue);        // We can also pass an initial starting value for the accumulator
// can also be written as
// num2 = mynums.reduce((acc, cur)=> acc+cur, initialValue)

console.log(num2);

//real life usage of reduce
// Shopping cart
const cart = [
    {
        name: "Product 1",
        price: 10
    },
    {
        name: "Product 2",
        price: 20
    },
    {
        name: "Product 3",
        price: 30
    }
]


const deliveryCharge = 18;
const totalprice = cart.reduce((acc, cur)=>{
    return acc + cur.price;     
},deliveryCharge);      

console.log(totalprice);