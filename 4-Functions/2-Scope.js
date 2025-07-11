// Scope
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // c=30 is eqivalant to var c=30;
}
// console.log(a); //Error
// console.log(b); // Error
// console.log(c); // 30 

// var is used for global scope and let and const are used for block scope

// Function in a function
function one (){
    const name = "aryan";
    function two(){
        console.log(name); // aryan
    }
    two();
}
one();

// Function Hoisting

console.log(addone(2)); // Output: 3 // We are able to call the function before it is defined
// This because function declarations are hoisted to the top of their scope
function addone(num){
    return num+1;
}

console.log(addtwo(2)); // We can't call the function before it is defined
// This is beacuse of the way the function is declared
const addtwo = function(num){
    return num+2;
}





