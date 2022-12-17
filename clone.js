let arr_clone = (clone)=>{
    let newArr = []
    clone.forEach((num)=>{
        newArr.push(num)
    })
    return newArr;
}
newArr = [1,2,3,4,[4,5,6,7]]
console.log(newArr)