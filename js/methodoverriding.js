let animal ={
    walk(){
        console.log("Animal Walk");
    }
};
let rabbit ={
    __proto__: animal

};

rabbit.walk = function(){
    console.log("Rabbit hops");
};
animal.walk();
rabbit.walk();