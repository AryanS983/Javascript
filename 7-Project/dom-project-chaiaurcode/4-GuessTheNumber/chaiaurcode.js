
const form = document.querySelector('.form')
const sub = document.querySelector('#subt')

const res = document.querySelector('.lowOrHi')
const prev = document.querySelector('.guesses')
const remian = document.querySelector('.lastResult') 

const rand = Math.floor(Math.random() * 100) + 1
console.log(rand);


form.addEventListener('submit',(e)=>{
    e.preventDefault()

    if(remian.innerHTML === '0'){
        res.innerHTML = 'Game Over'
        prev.innerHTML = ''
        remian.innerHTML = '10'
        return
    }

    const guess = parseInt(document.querySelector('#guessField').value)
    if(guess === rand){
        res.innerHTML = 'You Win !! Correct Answer = ' + rand
        prev.innerHTML = ''
        remian.innerHTML = '10'
        return
    }else if(guess> rand){
        res.innerHTML = 'Too High'
        prev.innerHTML += ` ${guess} `
        remian.innerHTML = parseInt(remian.innerText) - 1
        
    }else{
        res.innerHTML = 'Too Low'
        prev.innerHTML += ` ${guess} `
        remian.innerHTML = parseInt(remian.innerText) - 1
    }
})


//Famous brower events
//click – when an element is clicked
// dblclick – when an element is double-clicked
// mouseover – when the mouse pointer enters an element
// mouseout – when the mouse pointer leaves an element
// mousedown – when a mouse button is pressed
// mouseup – when a mouse button is released
// keydown – when a key is pressed
// keyup – when a key is released
// change – when the value of an input changes
// submit – when a form is submitted
// focus – when an element gains focus
// blur – when an element loses focus
// input – when the value of an input changes (for text fields)
// load – when a page or image finishes loading