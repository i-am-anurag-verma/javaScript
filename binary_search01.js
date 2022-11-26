let a = [2, 7, 23, 34, 56, 62, 69, 78, 84, 91, 98]
let low = 0;
let high = a.length - 1;
let mid;
let key = 84;

while (low <= high) {
    mid = (low + high) / 2;

    if (key < a[mid]) {
        high = mid - 1;
    }
    else if (key > a[mid]) {
        low = mid + 1
    }
    else if (key == a[mid]) {
        found = 1;
        break;
    } 
}
console.log("position of key value is " + mid );
