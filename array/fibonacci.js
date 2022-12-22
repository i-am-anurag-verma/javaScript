
let num = 8
let num1 = 0;
let num2 = 1;
let nextTerm;

for (let i = 0; i < num; i++) {
    console.log(num1)
    nextTerm = num1 + num2;
    num1 = num2;
    num2 = nextTerm;
}