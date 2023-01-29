let arr = [2,3,4,5,6];
let arr2 = [7,8,9,10,11,12];

//Merge Two Arrays and create new Array
// let mergeArr = [...arr, ...arr2];
// console.log(mergeArr)

let arr3 = [10,20,30,40,50,60]

//merge one or more array and return merged array
let merged = arr.concat(arr2,arr3)

// console.log(merged);


//Joined Array method

let fruits = ['mango', 'apple', 'banana', 'kiwi', 'orange'];

//join all the array element
let joined = fruits.join() //mango, apple, banana, kiwi, orange

// let joinFruits = fruits.join("   ") //mango apple banana kiwi orange

// console.log(joined);

//The fill() array method

// let names = ['ram', 'shyam', 'rahul'];

// names.fill('Dhaoni',1,3)

// console.log(names)

let text = ['tom', 'alex', 'bob', 'john'];

//The includes() Array method
  //text.includes('tom') //return true
  //text.includes('kamo') //return false

  //the indexOf() Array method

   let result = text.indexOf("bob") //return 2
   let results = text.indexOf("boby") //return -1
   console.log(result)
