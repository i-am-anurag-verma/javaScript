function linearSearch(arr, value){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
arr= [4,5,6,8,9,11,13]
console.log(linearSearch(arr, 8));