// Datatypes in JavaScript
// 1. Primitive Types
//    - String: Represents text data, e.g., "Hello"
//    - Number: Represents numeric data, e.g., 42, 3.14
//    - Boolean: Represents true or false values
//    - Undefined: Represents a variable that has been declared but not assigned a value
//    - Null: Represents an intentional absence of any value
//    - Symbol: Represents a unique identifier, introduced in ES6
//    - BigInt: Represents integers with arbitrary precision, introduced in ES11

// 2. Non-Primitive Types
//    - Object: Represents a collection of key-value pairs, e.g., { name: "John", age: 30 }
//    - Array: Represents an ordered list of values, e.g., [1, 2, 3]
//    - Function: Represents a reusable block of code, e.g., function() { return "Hello"; }
//    - Date: Represents a specific point in time, e.g., new Date()
//    - RegExp: Represents a regular expression, e.g., /abc/
//    - Map: Represents a collection of key-value pairs, e.g., new Map()
//    - Set: Represents a collection of unique values, e.g., new Set([1, 2, 3])

// 3. Type Checking
//    - typeof: Returns the type of a variable, e.g., typeof "Hello" returns "string"

const num = 42; // Number
const str = "Hello"; // String
const bool = true; // Boolean
const undef = undefined; // Undefined
const nul = null; // Null
const sym = Symbol("unique"); // Symbol
const bigInt = BigInt(12345678901234567890); // BigInt

//Common interview question
console.log(typeof null); // "object" (this is a known quirk in JavaScript)


