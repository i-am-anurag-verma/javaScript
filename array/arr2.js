function last(arr, n) {
    if (n == null) {
        return arr[arr.length - 1]
    }
    if (n > 0 && n < arr.length) {

        return arr.slice(arr.length - n, arr.length)
    }
    if (n > arr.length) {

        return arr;
    }
}
console.log(last([7, 9, 0, -2]))
console.log(last([7, 9, 0, -2], 3))
console.log(last([7, 9, 0, -2], 6))