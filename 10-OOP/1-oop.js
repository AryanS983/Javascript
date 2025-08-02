const user = {
    username: "aryan",
    age: 25,
    welcomemsg: function(){
        console.log(`Welcome to our website, ${this.username}!`);
        console.log(this);      // this is used to access the current object context
        
    }
}

console.log(user.username);
user.welcomemsg();

console.log(this);  //In node environment there is nothing in the global context but in browser it will be the window object

//new Kewyord

function User (username, useremail){        //Constructor Function
    this.username=username
    this.useremail=useremail
    this.greet = function (){
        return `Hello ${this.username}`
    }
    return this
}

const user1 = new User("aryan", "aryan@gmail")  // new keyword is used to create a new empty object
const user2 = new User("Ramesh", "ramesh@gmail")

console.log(user1);
console.log(user1.greet());

console.log(user1 instanceof User);

// console.log(user2);


