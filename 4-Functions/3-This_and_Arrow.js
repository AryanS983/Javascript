const user = {
    username: "aryan",
    age: 25,
    welcomemsg: function(){
        console.log(`Welcome to our website, ${this.username}!`);
        console.log(this);
        
    }
}

user.welcomemsg(); 

console.log(this); //Output: {} in node environment
// but in case of browser, it will be the window object => {document: document, location: location, navigator: navigator,…}

// function test(){
//     console.log(this);
// }
// test()
function test(){
    const username = "John";
    console.log(this.username); //Undefined as 'this' cannot be accessed in context of a function
}
test()



// ++++++++++++++++++++++ Arrow Function ++++++++++++++++++++++++++++++

// const addtwo = (num1,num2) => {
//     return num1 + num2;
// }

//Implicit returns
const addtwo = (num1,num2) => num1+num2;    // Return statement is not needed when there is only one line of code
// If {} are used retrurn statement is required
// const addtwo = (num1,num2) => { return num1+num2; }

// we can use also () for implicit return like so :-
// const addtwo = (num1,num2) => (num1+num2);
console.log(addtwo(2,5)); // 7

// While returning an object
const obj = () => ({name: "aryan", age: 25});   // () are needed
console.log(obj());