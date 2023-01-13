let arr = [2,3,4,5,6,78,2,22,21,23,25];
let newArr = []

let evenArr = arr.filter(ele => ele % 2 === 0)
let oddArr = arr.filter(ele => ele % 2 !== 0)

for(let i = 0; i < arr.length; i++){
    if(oddArr.length){
        if(i % 2 === 0){
            newArr.push(oddArr[0])
            oddArr.shift()
        }
    }
    if(evenArr.length){
        if(i % 2 !==0){
            newArr.push(evenArr[0])
            evenArr.shift()
        }
    }
    console.log(i)
}

console.log(newArr)