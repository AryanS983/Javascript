const mydate = new Date();
console.log(mydate); // Output: Current date and time in ISO format
console.log(mydate.toString()); // Output: Current date and time in a human-readable format
console.log(mydate.getTime()); // Output: Number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(mydate.toTimeString()); // Output: Current time in a human-readable format
console.log(mydate.toDateString()); // Output: Current date in a human-readable format

console.log(mydate.toLocaleTimeString()); // Output: Current time in a locale-specific format

// const myCreatedTime = new Date(2023, 0, 0, 12, 30) ; // January 1, 2023, 12:30 PM
// console.log(myCreatedTime.toLocaleString());  // Output: 31/12/2022, 12:30:00 pm

// const myCreatedTime = new Date(2023, 0, 0, 12, 30) ; // January 1, 2023, 12:30 PM 
// console.log(mydate.toLocaleString());  // Output: 31/12/2022, 12:30:00 pm

const myCreatedTime = new Date("2025-02-15 20:10"); // February 15, 2025, 8:10 PM
console.log(myCreatedTime.toLocaleString()); // Output: 15/02/2025, 8:10:00 pm

// As parameter month starts from 0, so 0 is January, 1 is February, and so on.
// But as string it starts from 1, so 1 is January, 2 is February, and so on.

const mystamp = Date.now(); // Returns the current timestamp in milliseconds
console.log(mystamp); // Output: Current timestamp in milliseconds since January 1, 1970, 00:00:00 UTC

console.log(myCreatedTime.getTime()); // Output: Timestamp in milliseconds for the specified date and time
console.log(myCreatedTime.getDay()); // Output: Day of the week (0-6, where 0 is Sunday)
console.log(myCreatedTime.getDate()); // Output: Day of the month (1-31)
console.log(myCreatedTime.getMonth()); // Output: Month (0-11, where 0 is January)
console.log(myCreatedTime.getFullYear()); // Output: Year (e.g., 2025)
console.log(myCreatedTime.getHours()); // Output: Hour (0-23)
console.log(myCreatedTime.getMinutes()); // Output: Minutes (0-59)  


//customize the date format
const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
const formattedDate = myCreatedTime.toLocaleDateString('en-US', options);
console.log(formattedDate); // Output: "Saturday, February 15, 2025" 









