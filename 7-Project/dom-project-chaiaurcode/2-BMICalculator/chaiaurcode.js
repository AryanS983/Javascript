const form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const innerHeight = parseInt(document.querySelector('#height').value)
    const innerWeight = parseInt(document.querySelector('#weight').value)

    const result = document.querySelector('#results')

    if(isNaN(innerHeight) || isNaN(innerWeight)){
        result.innerHTML = 'Please enter a number'
        return
    }
    if(innerHeight <= 0 || innerWeight <= 0){
        result.innerHTML = 'Please enter a number greater than 0'
        return
    }
    
    const bmi = innerWeight / (innerHeight * innerHeight)*10000
    result.innerHTML = `Your BMI is ${bmi.toFixed(2)}`

    if(bmi >24.9){
        result.innerHTML += ' You are Overweight'
    }else if(bmi<=24.9 && bmi >=18.6){
        result.innerHTML += ' You are Normal'
    }else{
        result.innerHTML += ' You are Underweight'
    }
})