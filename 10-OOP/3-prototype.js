let str = "Aryan       "

console.log(str.length);
// Lets say I need the true length of the string after removing all the whitespace by calling a method trueLength on the string

String.prototype.trueLength = function (){      //Adding a function to the prototype of the String Object itself
    console.log(this);
    return this.trim().length
}

console.log(str.trueLength());

Object.prototype.power = function(){
    console.log("Methods in Object protoype can be accessed by Arrays, Functions and Strings as well");
}

str.power()


//inheritance

const Teacher = {
    education: "PHD"
}

const SupportStaff = {
    workType :"Full Time",
    __proto__: Teacher      //All the properties of Teacher will be inherited by SupportStaff
}

console.log(SupportStaff.education);

//Modern Syntax

const employee = {
    department: "QA"
}

const manager = {
    salary : 10000,
}

Object.setPrototypeOf(manager, employee);    //All the properties of employee will be inherited by manager

console.log(manager.department);
