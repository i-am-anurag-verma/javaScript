function sum_sq(arr){
    var sum = 0;

    for(let i = 0; i < arr.length; i++)
    {
        sum = sum + Math.pow(arr[i], 3)
    }
    return sum;
}

console.log(sum_sq([2, 3]))