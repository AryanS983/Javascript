const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Promise 1 resolved");
        resolve()
    },2000)
})

promise1.then(()=>{
    console.log("promise1 consumed");


    // new Promise((resolve, reject)=>{             //Promise inside a promise
    //     setTimeout(()=>{
    //         console.log("Promise 2 resolved");
    //         resolve()
    //     },2000)
    // }).then(()=>{
    //     console.log("promise2 consumed");
    // })

})

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({name: "aryan", email: "aryan@gmail.com"})      //Passing a value to the promise if it is resolved
    },2000)
})

promise3.then((user)=>{
    console.log(user);
})

const promise4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const error = true
        if(!error){
            resolve({name: "jay", email: "jay@gmail.com"})  
        }else{
            reject("Some Error Occured")
        }
    },2000)
})

promise4.then((user)=>{
    console.log(user);
    return user.name        //returns to the next then
}).then((username)=>{       //takes the value returned from the previous then
    console.log(username);
}).catch((err)=>{           //executes if the promise is rejected
    console.log(err);
}).finally(()=>{
    console.log("Promise is either resolved or rejected");
})


const promise5 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const error = true
        if(!error){
            resolve({name: "hema", email: "hema@gmail.com"})  
        }else{
            reject("Some Error Occured")
        }
    },2000)
})

// consuming promise using async await
async function consumepromise5(){
    try{
        const response = await promise5     //We get direct response from the resolved promise
        console.log(response);
    }catch(err){
        console.log(err);                   //if the promise is rejected we can catch the error using try catch block 
    }
}

consumepromise5()


// Testing promises usign real api call

const users = async ()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")      // Fetch returns a promise
        const data = await response.json()
        console.log(data[0]);
    }catch(err){
        console.log("Error: ",err);
    }
}
users()

// The came thing can also be handled using then and catch

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data[2]);
}).catch((err)=>{
    console.log("Error: ",err);
})
