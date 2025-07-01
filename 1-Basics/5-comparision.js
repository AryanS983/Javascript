// Comparison operators in JavaScript
// < > <= >= == === != !==

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true

// Because comparison operators convert null to a number, which is 0.
// However, the strict equality operator (===) does not perform type coercion, so null
// eqality (==) checks for both value and type, and null is not equal to 0. 

console.log(undefined > 0);  // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

console.log(null == undefined); // true
console.log(null === undefined); // false



