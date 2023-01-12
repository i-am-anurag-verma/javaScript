function remove_arr_ele(arr, n){
    
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] == n){
            arr.splice(i,1)
        
        }
    }
    return arr;
}
console.log(remove_arr_ele([2,3,4,5,6,8],6))