let arr = [2,3,4,6,7,9]

let i = arr.length-1;
let j = arr.length-2;
let temp;
while(i > 0)
{
     temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i--;
    j--;
}
console.log(arr)