function fibonacci(num){

    let num1 = 0;
    let num2 = 1;
    let nextTerm;

    for(let i = 0; i < num; i++){
        nextTerm = num1 + num2;
        num1 = num2;
        num2 = nextTerm
    }
    return num2
}

console.log(fibonacci(8))