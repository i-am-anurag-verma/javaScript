function selection_sort(arr) {
    // temporary variable to store the position of minimum element

    let min;
    // reduces the effective size of the array by one in  each iteration.

    for (let i = 0; i < arr.length - 1; i++) {

        // assuming the first element to be the minimum of the unsorted array .
        min = i;

        // gives the effective size of the unsorted  array .

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {                //finds the minimum element
                min = j;
            }
        }
        // putting minimum element on its proper position.
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
}
console.log(selection_sort([9, 4, 7, 1, 3, 8, 6, 2]))