let arr = [2, 3, 4, 5, 8, 4, 9, 5, 8];
let duplicate;
let count = 0

for (let i = 0; i < arr.length; i++) {
  
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {

      duplicate = arr[i];
    
      break;
    }
  }
  if(duplicate) break;
}
console.log(duplicate);
