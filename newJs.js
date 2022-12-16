let arr = [2,3,4,5,6,2,4,5,9,7,8,9];

let count = {};

arr.forEach(element =>{
    count[element] = (count[element] || 0) + 1
});

console.log(count)  