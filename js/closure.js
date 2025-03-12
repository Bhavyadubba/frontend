function outerFunction(){
    let a = 0;
    function innerFunction(){
        a++;
        return a;
    }
    return innerFunction;
}

let b = outerFunction();
