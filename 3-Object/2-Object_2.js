// Singleton Object
const user = new Object();

// Adding properties to the object
user.id = 101;
user.name = "Aryan";
user.isLoggedIn = true;

console.log(user);

// Object inside an object
const user2 = {
    id: 102,
    name: {
        fullname: {
            first: "Aryan",
            last: "Shaw"
        },
        username: "aryan321"
    }
};
console.log(user2);

// Accessing nested properties
console.log(user2.name.fullname.first); // Output: Aryan  (using dot notation)
console.log(user2["name"]["fullname"]["last"]); // Output: Shaw  (using square bracket notation)

// Joining objects
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const obj3 = {...obj1, ...obj2}; // Using spread operator to join objects
console.log(obj3); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Merging objects with the same key
const obj4 = {a: 5, b: 6};
const obj5 = {b: 7, c: 8};
const obj6 = {...obj4, ...obj5}; // The value of 'b' will be taken from obj5 because it comes later
console.log(obj6); // Output: { a: 5, b: 7, c: 8 } 

// Using Object.assign to merge objects
const Obj7 = Object.assign({}, obj1,obj2, obj4, obj5); 
console.log(Obj7); // Output: { a: 1, b: 7, c: 8, d: 4 }
// Note: If there are properties with the same key, the last one will overwrite the previous ones.

// Using Object.keys to get an array of property names
const keys = Object.keys(user);
console.log(keys);

// using Object.values to get the values of the object in form of an array
const values = Object.values(user);
console.log(values);

console.log(Object.entries(user2));  // Converts the key value pair into a nested array

console.log(user.hasOwnProperty("name"));


