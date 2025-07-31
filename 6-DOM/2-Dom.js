//document properties;

// document.getElementById('desc')

// document.getElementById('desc').id

//returns the name of the class associated with the element
console.log(document.getElementById('desc').className)

// returns the value of a particular attribute in the selected element
console.log(document.getElementById('input').getAttribute('class'));

// sets the value of a particular attribute in the selected element
document.getElementById('input').setAttribute('placeholder', 'Enter your username');
// document.body.className = "bg-blue";

//adding more than one class without overwriting the existing class
const classdata = document.getElementById('input').getAttribute('class')
document.getElementById('input').setAttribute('class',classdata +' username');


const title = document.getElementById('title');
title.style.color = "red";
title.style.padding = "10px";
title.style.borderRadius = "10px";


//Difference between innerHTML, innerText and innerContent
console.log(title.innerHTML);
console.log(title.innerText);
console.log(title.textContent);


//query selector -> returns the first element that matches the selector
console.log(document.querySelector('h2'))
console.log(document.querySelector('.info'));
console.log(document.querySelector('#input'));
console.log(document.querySelector('h2.bg-blue'));
console.log(document.querySelector('input[type="password"]'));

//chaining query selector
console.log(document.querySelector('div > h2'));
console.log(document.querySelector('div > h2.bg-blue'));
const span = document.querySelector('#title')
console.log(title.querySelector('span').innerText);


//query selector all -> returns all elements that match the selector
console.log(document.querySelectorAll('h2')); // returns a nodeList
const headings = document.querySelectorAll('h2');   //nodeList has a forEach method
headings.forEach((h2) =>{
    h2.style.color = "#5f7d02ff";
})
// nodeList is not a regular array and does not have array methods like map, filter, reduce
// In order to use array methods we need to convert it into an array using the spread operator
// const headingsArray = [...document.querySelectorAll('h2')];


//get elements by class name
console.log(document.getElementsByClassName('bg-blue'));    //returns HTMLCollection
//get elements by tag name
console.log(document.getElementsByTagName('h2'));    //returns HTMLCollection
const listElemets = document.getElementsByTagName('li');
// HTMLCollection is not a regular array and does not have array methods either
// In order to use array methods we need to convert it into an array using the spread operator
// const headingsArray = [...document.getElementsByTagName('li')];
// another method
const listElemetArray =  Array.from(listElemets)
listElemetArray.forEach((h2) => {
    h2.style.color = 'orange';
})
