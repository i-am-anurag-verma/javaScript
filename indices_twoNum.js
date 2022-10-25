function twoNumSum(arr, target) {
    for(let i = 0; i <= arr.length; i++){
        for(let j = 0; j <= arr.length; j++){
            if(arr[i] + arr[j] == target){
                return [i, j]
            }
        }
    }
};
arr = [10,20,10,40,50,60,70]
console.log(twoNumSum(arr,120))