function filter_arr(arr){
    const arr2 = [];
    arr.forEach(item=>{
        if(item){
            arr2.push(item)
        }
    });
    return arr2;
}

arr =  [NaN, 0, 15, false, -22, '',undefined, 47, null]
console.log(filter_arr(arr))