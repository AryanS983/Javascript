// Types
const name = "John"; 
let age = 30; 
var isEmployed = true; 
salary= 30000;
let address;        // Undefined variable means it has been declared but not initialized

// name = "Jane"; // Not allowed, name is a constant

// Difference between const let and var in easy wreds
// const: Block-scoped, cannot be reassigned, must be initialized at declaration
// let: Block-scoped, can be reassigned, must be initialized at declaration
// var: Function-scoped, can be reassigned, can be declared without initialization

// Dont use var, use let and const instead because:
// 1. var is function-scoped, which can lead to unexpected behavior in loops and
//    conditionals.
// 2. var can be redeclared, which can lead to bugs.
// 3. let and const are block-scoped, which makes them more predictable and easier to
//    understand.