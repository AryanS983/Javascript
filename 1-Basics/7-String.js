let st="Aryan" // One way to declare a string
const str2 = new String("Aryan") // Another way to declare a string using the string Class

console.log(st); // Output: Aryan   This is a primitive string
console.log(str2); // Output: [String: 'Aryan']        // This is a String object

console.log(typeof st); // Output: string
console.log(typeof str2); // Output: object

console.log(str2 instanceof String); // Output: true
console.log(str2[0]);

// Both strings can be used interchangeably in most cases

console.log(st.length); // Output: 5
console.log(st.toUpperCase()); // Output: ARYAN
console.log(st.charAt(2)); // Output: y
console.log(st.indexOf("a")); // Output: 3          // Returns the index of the first occurrence of "a" and -1 if not found

console.log(st.substring(1, 4)); // Output: rya   // Extracts characters from index 1 to 3 (4 is not included)
console.log(st.slice(0, -1));  // Output: Arya   // Extracts characters from index 0 to the second last character
console.log(st.split("a")); // Output: [ 'Ary', 'n' ] // Splits the string into an array using "a" as the delimiter

const str1= "   Aryan   " // String with leading and trailing whitespace
console.log(st.trim()); // Output: Aryan // Removes whitespace from both ends of the string

console.log(st.replace("Aryan", "John")); // Output: John // Replaces "Aryan" with "John"
//RealLife usage
let url = "https://www.example.com/path/to/resource%20query=123";
console.log(url.replace('%20',"?")); 
console.log(url.includes("example")); // Output: true // Checks if the string contains "example"





