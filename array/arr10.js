const arr = [1,2,3,4,5,6,7,8];

     arr.push(9)

const newArr = arr.map(ele => {
    return ele * 2
})

console.log(newArr);