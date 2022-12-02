// let myColor = ["Red", "Green", "Black", "White"];
// console.log(myColor.toString());
// console.log(myColor.join());
// console.log(myColor.join('+'));

const number = [1, 2, 3, 4, 5, 6];

const [one, two , ...rst] = number;

console.log(one)
console.log(two)
console.log(rst)

const a = number;

number.pop();


console.log(a, number)

const b =[...number];

b.pop();
console.log(number, a, b)


const arrValue = ['my', 'name' , 'is', 'Jack' ]

console.log(arrValue);
console.log(...arrValue);


