function nthLargest(arr, nthTerm){
    let largest = 0;
    if(nthTerm <= arr.length){
        for(let i = 0; i <= nthTerm; i++){
            if(arr[i] > largest){
                largest = arr[i]
            }
        }
    }
    return largest;
}
console.log(nthLargest([43, 56, 23, 89, 88, 90, 99, 652], 1))