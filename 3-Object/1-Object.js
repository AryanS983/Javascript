//singleton object is created using constructor function

//object literal
const mysym = Symbol("mySymbol")
const pass = "password123";
const social = "linkedin";
const socialvalue = "Aryan-LinkedIn";
const gender = "male";

const user = {
    name: "Aryan",
    age : 30,
    email: "aryan@google.com",
    isLoggedIn: false,
    "user hobbies": ["coding", "reading", "gaming"], // property with space in name
    [mysym]: "This is a symbol property ", // using a symbol as a property
    password: pass, // using a variable as a property value
    [social]: socialvalue, // using a variable as a property value
    test : `My name is ${this.name} and I use ${social} and my socal mediahandle is ${this[social]} my hobbies are ${this["user hobbies"]}`, // using this keyword to access properties
    dateofbirth: (new Date(2004, 3, 12)).toLocaleDateString(),
    gender // quick way to assign variable value to property
}

// Accessing properties
console.log(user.email);
console.log(user["email"]); // when using square brackets, we write it as a string

// Accessing property with space in name
console.log(user["user hobbies"]); // using square brackets to access property with space
// it cannot be accessed using dot notation

// Accessing symbol property
console.log(user[mysym]);

// Accessing variable properties
console.log(user[social]); // using variable as property name

// Accessing property using this keyword
console.log(user["test"]); 
// Why it is not working?
// Because `this` inside the object refers to the object itself, but when we access it
// using user["test"], `this` does not refer to the user object.
// To fix this, we can use a method instead of a property:

// user.email = "aryan@microsoft.com"; // updating property value
// console.log(user.email); // updated value
// Object.freeze(user); // freezing the object to prevent further changes
// user.email = "aryan@Cognigent.com"; // trying to change the value after freezing
// console.log(user.email); // still shows the old value, as it is frozen

console.log(user); // printing the entire object

// using methods to access properties
user.getEmail = function() {
    console.log(`Email is ${this.email}`);
}

user.getEmail(); // calling the method to get email

// using arrow function to access properties
user.getSocial = () => {
    return this[social];

}
console.log(user.getSocial()); // calling the arrow function to get social media handle
// Note: Arrow functions do not have their own `this`, so it will not work as expected
// To fix this, we can use a regular function instead of an arrow function:
user.getSocial = function() {
    return this[social];
}

console.log(user.getSocial()); // calling the regular function to get social media handle





