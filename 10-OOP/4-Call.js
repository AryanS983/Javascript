function setuser(username){
    this.username = username      //this here does not belong to setuser function, it belongs to the CreateUser function
}

function CreateUser(username, email, pass){
    setuser.call(this, username)   // call method is used to send the current execution context (this) to a different function
    this.email = email
    this.pass = pass
}

const user1 = new CreateUser("aryan", "aryan@gmail", "password123")
console.log(user1);
