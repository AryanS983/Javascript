const start = document.getElementById('start')
const stop = document.getElementById('stop')

let interval;
start.addEventListener('click', function(){
    interval = setInterval(()=>{
        document.body.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString()}`;
    },1000)
})

stop.addEventListener('click', function(){
    clearInterval(interval)
})