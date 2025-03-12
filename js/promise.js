const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello this is resolved ")
    },2000)
})
myPromise
.then((message)=>{
    console.log(message + "full")
})
.catch((error)=>{
    console.log(error)
})