let arr = [3,4,5,6,2,9, 56, 38, 22,8,11,23,56]
let newArr = [];
let oddArr = arr.filter(ele => ele % 2 != 0);
let evenArr = arr.filter(ele => ele % 2 === 0)
// console.log(evenArr,oddArr,newArr)
// arr.forEach((ele, index) => {
    for(let i = 0; i < arr.length; i++){
    if(oddArr.length) {
        if(i % 2 === 0) {
            newArr.push(oddArr[0]);
            oddArr.shift();
        }
    } else {
        newArr = newArr.concat(evenArr);
       break;

    }

    if(evenArr.length) {
        if(i % 2 !== 0) {
            newArr.push(evenArr[0]);
            evenArr.shift();
        }
    }else {
        newArr = newArr.concat(oddArr);
       break;
    }
  
}

console.log(evenArr,oddArr,newArr)

