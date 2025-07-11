// Immediately Invoked Function Expression (IIFE)

function test0 () {
    console.log("I am an IIFE function");
}
test0();            // Use ; here as well

(function test () {
    console.log("I am an IIFE function");
})();
// It does not get influenced by the global scope


(function test () {
    console.log("I am an IIFE function");
})();    // While using IIFE we have to use ; at the end in order to end the scope or else it will throw an error

(function test2 () {        // This is named IIFE
    console.log("I am anther IIFE function");
})();

(function (){            // This is an unnamed IIFE 
    console.log("Hello");
})();

((parameter)=>{
    console.log(`${parameter}, This is an unnamed IIFE with arrow function`);
    
})("Hello");