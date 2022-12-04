const myFun = function (str, input) {

    let arr = str.split(',')

    let arr1 = arr.map(Number)

    var result = [];

    if (!input) return arr1[0];
    for (var i = 0; i < input; i++) 
    {
        result.push(arr1[i]);
    }
    return result;
}
str = '1,2,3,4,5,6,7,8';
input = 4
console.log(myFun(str, input))