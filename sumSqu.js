function sum_sq(arr){
    var sum = 0;

    for(let i = 0; i < arr.length; i++)
    {
        sum = sum + Math.pow(arr[i], 2)
    }
    return sum;
}

console.log(sum_sq([1,2,3,4,5]))