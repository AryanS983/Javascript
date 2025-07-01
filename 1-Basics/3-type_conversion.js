// let score = 33
// console.log(typeof score); // number

// console.log(typeof(String(score))) // String ka S capital 


// score = "33"
// console.log(typeof score); // string

// valueInScore  =  Number (score) // Number ka N capital
// console.log(typeof valueInScore);


// score = "33xyz"
// valueInScore  =  Number (score) 
// console.log(typeof valueInScore); // number
// console.log(valueInScore); // NaN (Not a Number)

// score = null
// valueInScore  =  Number (score)
// console.log(valueInScore); // number


isLoggedIn = "false"  // Anything written in quotes will return true when converted to boolean
valueInLoggedIn = Boolean(isLoggedIn) 
console.log(valueInLoggedIn); //true

isLoggedIn = ""     // Empty string will return false when converted to boolean
valueInLoggedIn = Boolean(isLoggedIn)
console.log(valueInLoggedIn); // false