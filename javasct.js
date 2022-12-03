const myFun = function(array, input){
    var result = [];
    if(input === undefined) return array;
    for (var i = 0; i < input; i++) {
      result.push(array[i]);
    } 
    return result;
   }
  array = [1,2,3,4,5,6,7]
   input = 5
   console.log(myFun(array, input))