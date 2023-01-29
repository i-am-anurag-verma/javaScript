let arr = [2, 3, 4, 5, 6, 78, 2, 22, 21, 23, 25];
let newArr = [];
let copiedArr = [...new Set(arr)];

console.log("======>",copiedArr)

// let evenArr = arr.filter(ele => ele % 2 === 0)
// let oddArr = arr.filter(ele => ele % 2 !== 0)

// for(let i = 0; i < arr.length; i++){
//     if(oddArr.length){
//         if(i % 2 === 0){
//             newArr.push(oddArr[0])
//             oddArr.splice(0,1)
//         }
//     }else{
//         newArr = newArr.concat(evenArr)
//         break;
//     }
//     if(evenArr.length){
//         if(i % 2 !==0){
//             newArr.push(evenArr[0])
//             evenArr.shift()
//         }
//     }else{
//         newArr = newArr.concat(oddArr)
//         break;
//     }
// }

for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    const oddIndex = copiedArr.findIndex((even) => even % 2 !== 0);
    if (oddIndex > -1) {
      newArr.push(copiedArr[oddIndex]);
      copiedArr.splice(oddIndex,1);
    }
}else{
    newArr = newArr.concat(copiedArr);
    break;
}
  
  if (i % 2 !== 0) {
    const evenIndex = copiedArr.findIndex((odd) => odd % 2 === 0);
    if (evenIndex > -1) {
      newArr.push(copiedArr[evenIndex]);
      copiedArr.splice(evenIndex,1);
    }

  } else {
    newArr = newArr.concat(copiedArr);
    break;
  }

}
console.log(newArr);
