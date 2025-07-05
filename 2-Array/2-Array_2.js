const arr1 = ["aryan", "sahil", "sachin"];
const arr2 = ["rimita", "Isha", "suman"];

// Merging two arrays
console.log(arr1.concat(arr2)); // Output: [ 'aryan', 'sahil', 'sachin', 'rimita', 'Isha', 'suman' ]
// Merging two arrays using spread operator
const mergedArray = [...arr1, ...arr2]; // ... spreas the elements of the arrays
// This is a more modern and preferred way to merge arrays in JavaScript.
console.log(mergedArray); // Output: [ 'aryan', 'sahil', 'sachin', 'rimita', 'Isha', 'suman' ]

const arr3 = [1,2,34,[4,2,4,[5,6,7]]]; // Nested array
console.log(arr3.flat(Infinity)); // Output: [ 1, 2, 34, 4, 2, 4, 5, 6, 7 ]
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// The Infinity argument means it will flatten all levels of nesting.
// syntax: flat(depth)


Array.isArray(arr1); // Output: true
Array.from("Hello Boii"); // Output: [ 'H', 'e', 'l', 'l', 'o', ' ', 'B', 'o', 'i', 'i' ]
// The Array.from() method creates a new array from an array-like or iterable object.

const x=10;
const y=20;
const z=30;
const arr4 = Array.of(x, y, z); // Creates a new array with the specified elements

console.log(arr4); // Output: [ 10, 20, 30 ]
// The Array.of() method creates a new array instance with a variable number of arguments

