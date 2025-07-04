const num =  10;    // Using a primitive number type
console.log(num);

const num2 = new Number(10);    // Using the Number class to create a number object
console.log(num2);

console.log(num.toString().length); // Output: 2   // Converts the number to a string and gets its length
console.log(num.toFixed(2)); // Output: 10.00 // Formats the number to 2 decimal places
console.log(num.toPrecision(6)); // Output: 10.0000 // Formats the number to 6 significant digits

const num3 = 5.6789;
console.log(num3.toFixed(2)); // Output: 5.68 // Rounds the number to 2 decimal places
console.log(num3.toPrecision(3)); // Output: 5.68 // Rounds the number to 3 significant digits

const num4 = 123456789;
console.log(num4.toLocaleString()); // Output: 123,456,789 // Formats the number with commas according to the default locale
console.log(num4.toLocaleString('en-IN')); // Output: ₹1,23,45,67,89.00 // Formats the number as currency in Indian Rupees
console.log(num4.toLocaleString('en-US')); // Output: $123,456,789.00 
console.log(num4.toLocaleString('en-US', { style: 'currency', currency: 'USD' })); // Output: $123,456,789.00 // Formats the number as currency in US Dollars


console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY); // Output: Infinity
console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity


//+++++++++++++++++++++Math Object+++++++++++++++++++++
console.log(Math.PI); // Output: 3.141592653589793
console.log(Math.E); // Output: 2.718281828459045
console.log(Math.sqrt(16)); // Output: 4 // Square root of 16
console.log(Math.pow(2, 3)); // Output: 8 // 2 raised to the power of 3
console.log(Math.abs(-5)); // Output: 5 // Absolute value of -5
console.log(Math.ceil(4.2)); // Output: 5 // Rounds up to
console.log(Math.floor(4.8)); // Output: 4 // Rounds down to the nearest integer
console.log(Math.round(4.5)); // Output: 5 // Rounds to the nearest integer
console.log(Math.max(1, 2, 3, 4, 5)); // Output: 5 // Maximum value among the arguments
console.log(Math.min(1, 2, 3, 4, 5)); // Output: 1 // Minimum value among the arguments
console.log(Math.trunc(4.9)); // Output: 4 // Removes the decimal part of a number
console.log(Math.sign(-5)); // Output: -1 // Returns -1 for negative numbers
console.log(Math.sign(0)); // Output: 0 // Returns 0 for zero


console.log(Math.random()); // Output: A random number between 0 and 1
console.log(Math.random() * 10); // Output: A random number between 0 and 10
console.log(Math.floor(Math.random() * 10)); // Output: A random integer between 0 and 9

const min = 10;
const max = 20;
const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min; // Random integer between 10 and 20
console.log(randomInRange); // Output: A random integer between 10 and 20




