const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body");
buttons.forEach((button)=>{
    const color = button.getAttribute('id');
    button.addEventListener('click', (e)=>{
        body.style.backgroundColor=color
        console.log(e);
        console.log(e.target);
        
        
    })
})