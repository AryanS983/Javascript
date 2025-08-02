function multiplyby5(num){
    return num*5
}

multiplyby5.power = 2       // Every thing in JS is an object be it array, function or string

console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);

function Product (name, price){
    this.name = name;
    this.price = price;
}

Product.prototype.incPrice = function(amount){      //Adding a function to the prototype of the object
    this.price += amount;
}

const prod1 = new Product("Phone", 1000);
prod1.incPrice(1000);
console.log(prod1.price);


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/