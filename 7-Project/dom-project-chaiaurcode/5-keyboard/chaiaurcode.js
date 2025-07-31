const ins = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
    ins.innerHTML = `You Pressed ${e.key===' '? "Space": e.key}`
})