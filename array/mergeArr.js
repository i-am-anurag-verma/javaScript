function merge_arr(arr1, arr2){
    var arr = arr1.concat(arr2);
    arr = arr.filter((item, index, inputArr)=>{
        return inputArr.indexOf(item) === index;
    })
    return arr
}
console.log(merge_arr([1,2,3], [2,30, 1, 4]))