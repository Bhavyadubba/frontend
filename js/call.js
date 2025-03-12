var emp1={firstName:"Bhavya",lastName:"Dubba"};
var emp2={firstName:"john",lastName:"Rabson"};
function invite(greeting1,greeting2){
    console.log(
        greeting1 + " "+firstName + " " + lastName + " " +greeting2
    );
}
invite.call(emp1,"hello","How are you");
invite.apply(emp2,["hello","how are you"]);

