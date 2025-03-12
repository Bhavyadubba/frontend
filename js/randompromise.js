const randomPromise = new Promise((resolve,reject)=>{
    const randnum = Math.random();
    if (randnum >0.5){
        resolve("Num greater")
    }else{
    reject("Smaller")
    }
})
randomPromise
.then((message)=>{
    console.log(message)
    return "hello"
})
.then(value=>{
    console.log(value)
})
.catch((error)=>{
    console.log(error)
})