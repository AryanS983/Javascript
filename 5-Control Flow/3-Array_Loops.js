//for of

const arr = [1,2,3,4,5];

for (const num of arr) {
    console.log(num);
}

const str = "Hell0 Aryan"

for (const char of str) {
    console.log(char);
}

//Map

const map = new Map();
map.set('IN', "India");
map.set('US', "United States");
map.set('CA', "Canada");

for(const [key, Value] of map) {
    console.log(key, Value);
}


//Object

const obj = {
    name: "Aryan",
    age: 25
}

// for(const [key, Value] of obj) {     // This will throw an error as object is not iterable
//     console.log(key, Value);
// }

for(const [key, Value] of Object.entries(obj)) {    // Object.entries returns an array of key value pair
    console.log(key, Value);
}

// for in

for(const key in obj){
    console.log(key+":" + obj[key]);   
}

const arr1 = ["java", "python", "c++", "c", "javascript", "html", "css"];

for(const key in arr1){
    console.log(key+":" + arr1[key]);   // Here key is the index
}

//for in cannot be used for maps


//for each

// arr1.forEach((val)=>{   
//     console.log(val);
    
// })

// arr1.forEach((val, index)=>{
//     console.log(val, index);
    
// })

arr1.forEach((val, index, array)=>{
    console.log(val, index, array);
})

// another way 
function printme (item){
    console.log(item);
}

arr.forEach(printme);


// Array of objects

const arr2 = [
    {
        name: "Aryan",
        age: 25
    },
    {
        name: "Esha",
        age: 20
    },
    {
        name: "Rohan",
        age: 30
    }
]


arr2.forEach((item)=>{
    console.log(item.name," ", item.age);
})