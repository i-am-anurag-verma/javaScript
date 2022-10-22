function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === val) {
        return mid;
      }
  
      if (val < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }
  var arr = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binarySearch(arr, 1));   
console.log(binarySearch(arr, 5));