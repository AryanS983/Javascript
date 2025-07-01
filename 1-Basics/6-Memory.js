// 2 main types of memory in JavaScript:
// 1. Stack Memory: Used for static memory allocation, stores primitive data types and references to objects. (Primitive)
//    - Stack retures a copy of the value
// 2. Heap Memory: Used for dynamic memory allocation, stores objects and functions.(Non Primitive)
//    - Heap returns a reference to the object
// Example:
let num = 10; // Stack memory (primitive type)
let num2 = num; // num2 is a copy of num, stored in stack memory
num2 = 20; // Changing num2 does not affect num
console.log(num); // 10 (num remains unchanged)
console.log(num2); // 20 (num2 is changed)

let obj = { value: 10 }; // Heap memory (non-primitive type)
let obj2 = obj; // obj2 is a reference to the same object in heap memory
obj2.value = 20; // Changing obj2 affects obj since they reference the same object
console.log(obj.value); // 20 (obj is changed)
console.log(obj2.value); // 20 (obj2 reflects the change)
