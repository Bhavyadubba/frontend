let car = {
    engine : "yes",
    containfuel(){
        console.log("yes it contains fuel");
    }
};
let bmw ={
    fast:"yes",
};

bmw.__proto__= car;
console.log(bmw.engine);
console.log(bmw.fast);
console.log(bmw.containfuel());
console.log(bmw.hasOwnProperty(fast));