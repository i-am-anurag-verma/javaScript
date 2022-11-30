function sum_multiply(arr){
    
    let sum = 0;
    let multi = 1;

    for(let i = 0; i < arr.length; i++)
    {
        sum = sum + arr[i];
        multi = multi * arr[i]
    }
    return {
        sum,multi
    };
    
}
console.log(sum_multiply([1,2, 3 ,4,5,6]))