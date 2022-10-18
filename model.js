// let a=[1,3,7,8,9]
// let b=[]
// for(let i=0; i<a.length; i++){
//   if(b.length==0){
//     b.push(a[i])
//   }
//   else{
//     console
//     b.push(b[i-1]+a[i])
//   }
// }

// console.log(b);

// let a=[[1,3],[7,9],[8,2]];
// let b = [];
// for(let i=0; i<a.length; i++){
//   console.log(a[i]);
//   for(let j = 0; j < a[i].length; j ++) {
//     b.push(a[i][j])
//   }
// }

// console.log("here is output", a.flat());

// let a = [2,0,3,6,9,7,28,30]
//   let b = []
//   for(let i=0; i<a.length; i++){
//     if(a[i]%3==0){
//       console.log()
//       b.push(a[i])
//     }
//   }
// console.log(b)


// let b = a.filter(ele => ele%a[2] === 0);

// console.log(b)

// let a = [1,3,7,1,5,3,1]
// let count = []

// a.forEach(function(element) {count[element]=(count[element]||0)+1;});
// console.log(count)




// const a = [4,3,6,3,4,3];
// let b =4;
// let c =0;


//   for(let i =0; i < a.length; i++){ 
//       if (a[i] === b){
//         c++;
//       } 
//      }  

// console.log(c)


// let a = [1,2,1,3,4,2,5,1]
// let b = {}

// a.forEach(element => {
//   b[element]=(b[element] || 0)+1;
//   console.log(b)
// });
// console.log(b);


//array element shift to right by 1 position

// let arr = [1,2,3,4,6,8,9]
// let last_digit=arr[arr.length -1];
// for(let i=arr.length-1; i>0; i--){
//    arr[i]=arr[i-1];
//    console.log(arr)
// }
// arr[0]=last_digit
// console.log(arr)

//OR

// let arr=[2,3,4,5,6,7,8]
// let temp=arr[arr.length-1]

// for(let i=arr.length-2; i>=0; i--){
//   arr[i+1]=arr[i]
//   console.log(arr,i)
// }
// arr[0]=temp
// console.log(arr)


// let arr = [1,7,2,9,5,3,12]

// for(let i=1; i<=arr.length; i++){
//       if()
// }

//find prime number

// let arr = [1,7,2,9,5,3,12]

// function isPrime(number){
//   if(number == 1) return false;
//   if(number == 2 ) return true;
//   let a = true;
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0){
//       a =false; 
//       break;
//   }

// }
// return a;
// }

// let newArray = [arr[0]]
// for(let  i = 1; i < arr.length; i ++ ) {
//   if(isPrime(arr[i])) {
//     newArray.push(arr[i] - newArray[i -1])
//   } else {
//     newArray.push(arr[i] + newArray[i -1])
//   }
// }

// console.log(newArray)

// 



// let data = [{
//   name :"ABC",
//   age : 25
// },
// {
//   name:"DEF",
//   age:22
// },
// {
//   name:"XYZ",
//   age:23
// }]

// let myObj = [];
// data.forEach(function(ele){
//     myObj.push(ele.name);
// })
// console.log(myObj);
// let myObject = [];
// data.forEach(function(ele){
//     myObject.push(ele.age);
// })
// console.log(myObject);

// let sum = 0;

// for(let number of myObject){
//    sum +=number
// }
// average = Math.floor(sum/myObject.length);
// console.log(average)

// console.log(Object.keys(data[0]));

// var arr = function(input) {
//   if(toString.call(input) == "[object Array]")
//   return true;
//   return false

// };
// console.log(arr([1234]));
// console.log(arr('ram3ww'));




// let arr= []
// let count = 0
// console.log("Even Number is:-")
// for(let i=1; i<=100; i++){
//   if(i%2==0){
//     console.log(i)
//   } 
// }

// let arr = [1,2,3,1,3,4,5,6,2,7,8,9,4,6]

// for(let i = 0; i<=arr.length; i++){
//    for(let j=i+1; j<arr.length; j++){
//     if(arr[i]==arr[j]){
//       console.log(arr[j])
//     }

//    }
// }

// var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// var o = ["th", "st", "nd", "rd"]
// for (var i = 0; i < color.length; i++) {
// if(o[i+1] == undefined){
// o[i+1] = o[0]
// }
// console.log(`${i+1}${o[i+1]} choice is ${color[i]}`)
// }



// let arr = [3,4,5,6,7,8,9,11,12,13]
//  let arr1 =[]
// let arr2= []
// arr = arr.reverse();
// for(let i = 0; i < arr.length; i++) {
//     if(i%2 == 0){
//     arr1.push(arr [i])

//     } else {
//       if(i === 1) {
//         arr2[i - 1] = arr[i]  
//     } else {
//       arr2[(i - 1)/2] = arr[i]  
//     }
//   }
//   }
//   console.log(arr1,arr2)



// function reverse ( arr  ,  n )  
// {  
//   let  tmp ;  
//   for( let i = 0 ; i < n / 2 ; i + + )  
//   {  
//     tmp = arr [ i ] ;  
//     arr [ i ] = arr [ n - 1 - i ] ;  
//     arr [ n - 1 - i ] = tmp ;  
//   }  
//   return arr;
// }  



// console.log("hello world")

// //count prime number
// let a = [ 2, 5, 7, 8, 9, 12, 13, 17, 18, 19, 25, 23, 50]
// var prime = [];
// var count = 0

// function isPrime(number) {
//   var num = number / 2;
//   for (var j = 2; j <= num; j++) {
//     if ((number % j) == 0) {
//       return false;
//     }
//   }
//   return true;
// }
// for (var i = 0; i < a.length; i++) {
//   if (isPrime(a[i])) {
//     prime.push(a[i])
//   }
// }

// console.log(prime)

// ///////////////////////////////////


//  function  clone(arr2) {
//   return arr2.slice(0);
//      };
//  console.log(clone([1, 2, 4, 0]));
//  console.log(clone([1, 2, [4, 0]]));


//  ///////////////////
//  let x= [1,2,3,4]
// console.log("original array")
// console.log(x)

// let y = [...x]
// console.log("clone of the said array")
// console.log(y)

// ////////////////////////
// let p = [1,2,3,4]
// console.log("original array")

// console.log(p)

// let q =Array.from(p)
// console.log("clone of the said array")
// console.log(q)

/////////////////////////////////////////

myColor = ["RED", "GREEN", "WHITE", "BLUE", "YELLOW", "ORANGE"]

console.log(myColor.toString())
console.log(myColor.join())
console.log(myColor.join(' + '))


/////////////////////////////////

var number = [ 3, 8, 7, 6, 5, -4, -3, 2, 1, -19,0 ];

number.sort(function(a,b) {
  if(a > b) return 1;
  if( a < b) return -1
});

console.log(number)

////////////////////////////////

let numbers = [3, 4, 5, 6, -9, -4, 8, 11, 0, 88]

numbers.sort((a, b) => {
    if(a > b)return 1;
    if(a < b) return -1;
})

console.log(numbers)

/////////////////////////////

let animals = ["elephant", "lion", "cat", "dog", "bee", "zebra"]

animals.sort((a, b) =>{
  if(a > b) return -1;
  if(a < b) return 1;
});

console.log(animals)

//////////////////////////////////////////

let employees = [
  {name: 'Ram', salary: 90000, hireDate: "July 1, 2010"},
  {name: 'Shayam', salary: 75000, hireDate: "August 15, 2009"},
  {name: 'Mohan', salary: 80000, hireDate: "December 12, 2011"}
];

employees.sort((x,y) => {
  return x.salary - y.salary
})

console.table(employees)

/////////////////////////////////////

var arr = [3, 'a', 'a', 'a',2, 3, 'a', 3, 'a', 2, 4,5];

var mf = 1;
var m= 0;
var item;

for(var i = 0; i < arr.length; i++)
{
  for(j = i; j < arr.length; j++)
  {
    if(arr[i] == arr[j])
      m++;
      if(mf < m){
        mf = m
        item = arr[i]
      }
    }
    m=0
  }
console.log(item+ "(" +mf +" times )")