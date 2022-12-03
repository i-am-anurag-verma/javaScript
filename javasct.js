const myFun = function (str, input) {

    let arr = str.split(',')

    var result = [];

    if (!input) return arr[0];
    for (var i = 0; i < input; i++) 
    {
        result.push(parseInt(arr[i]));
    }
    return result;
}
str = '1,2,3,4,5,6,7,8';
input = 4
console.log(myFun(str, input))