const myname = function(name){
    if(!name){
        
        return "Enter a valid name";
        
    }
    return `My name is ${name}` 
}

console.log(myname("aryan"));

// Rest operator

const items = function(...val1){
    return val1;
}

// const items = function(num1, num2,...val1){
//     return num1 + num2;
// }

console.log(items(2,5,7,3));

const obj = {name: "aryan", age: 25};

const details = function(object){
    return `My name is ${object.name} and my age is ${object.age}`
}

console.log(details(obj))

