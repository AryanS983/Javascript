// IF

if(2 !== '2'){
    console.log("True");
    
}else{
    console.log("False");
    
}

// Available operators
// == Equal to
// != Not equal to
// > Greater than
// < Less than
// >= Greater than or equal to
// <= Less than or equal to
// === Strict equal to
// !== Strict not equal to

const balance = 1000

// if(balance >700) console.log("You are rich"), console.log("You can buy anything you want");  // This is not a good practice
// dont use , to write multiple statements in a single line even though it works


// If else else fi

// if (balance>500){    
// }else if (balance>700){
// }else{
// }

// Ternary operator
// condition ? true : false

// and && or || not !
const userLoggedIn = true
const loggedinFromEmail = false
const loggedinFromGoogle = true
userLoggedIn && (loggedinFromEmail || loggedinFromGoogle) ? console.log("User is logged in") : console.log("User is not logged in")
// used in authentication in front end



const month = 3
// switch Case
switch (month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("Invalid month");
        break;
}




let email = ""
// If there is no string in the the email it will return false

if(-1){
    console.log(email);
}else{
    console.log("Email Not Recieved");
}

// falsy values:-
// false
// 0 / -0 / 0n <- used in bigint
// ""
// undefined
// null
// NaN

// truthy values:-
// "0"
// "false"
// " "
// [] <- empty array
// {} <- empty object
// 1
// -1
//function(){}

// If there is and empty array never use it directly as a condition
const arr = []
if(arr.length > 0){        // Instrad use its length
    console.log("Array is not empty");
}else{
    console.log("Array is empty");
}

const obj = {}
if (Object.keys(obj).length > 0){
    console.log("Object is not empty");
}else{
    console.log("Object is empty"); 
}

// Nullish Coalescing Operator (??)
// null or undefined
const user2 = "" ?? "guest"
console.log(user2);

const user1 = null ?? "guest" 
console.log(user1);

// Same thing can be achieved using the || operator
// the only difference being that || operator will return false for all falsy values but 
// ?? operator will return false only for null and undefined
const user = "" || "guest"
console.log(user);

// we can use multiple  ?? operators
const user3 = null ?? undefined ?? "guest"
console.log(user3); 

