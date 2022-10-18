//1. way to print javascript
//console.log("Hello World")
//alert('me')
//document.write("This is document write")

//2. javascript console API
// console.log("Hello World", 4+6, "another");
// console.warn("This is warning");
// console.error("This is an error");
 
//3. javascript variables
//what are variables? -container to store data variables

var number1 = 34;
var number2 = 56;
console.log(number1+number2);

//4. Data type in javascript

   //numbers
var num1 = 434;
var num2 = 556;

  //string
var str1= "This is a string";
var str2="This is a also string"


//objects
var marks= {
	Anil:70,
	Manish:91,
	Anurag:68
}
console.log(marks);

//Booleans

var a= true;
var b= false;
console.log(a, b); 

// var und=undefined
var und;
console.log(und)

var n=null;
console.log(n)

/*
At very high level,there are two types of data type
in javascript:-
1. Primitive data type: undefined, null, number, string, boolean, symbol
2. Reference data type: Arrays and Objects
*/

var arr = [1,2,"Anurag",4,5]
console.log(arr)

//operators in javascript
//Arithmatic operator

//var a=100;
//var b=10;
// console.log("The value of a+b is", a+b);
// console.log("The value of a-b is", a-b);
// console.log("The value of a*b is", a*b);
// console.log("The value of a/b is", a/b);

//Assingment operators

//var c = b;
//c+=2
//c-=2
//c*=2
//console.log(c)

//comparison operator
 var x=36;
 var y=56;
// console.log(x==y)
// console.log(x>=y)
// console.log(x<=y)
// console.log(x<y)

// //Logical operator
//Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

//Logical or
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)
// console.log(true || true)

//logical not
// console.log(!false)
// console.log(!true)

//function in javascript
// DRY -Do not repeat yourself
function avg(a, b) {
        c=(a+b)/2;
        return c;
}
c1=avg(4, 6)
c2=avg(14, 16)
//console.log(c1, c2);

//conditionals javascript
var age=32;
 if(age>18){
 //console.log("you are not a kid")
 }
 //if- else statment
 // if(age>18){
 // 	console.log("you can drink rasna water")
 // }
 // else{
 // 	console.log("you can not drink rasna water")
 // }
// age=38;
//  //if-else ladder
//  if(age>20){
//  	console.log("you are not a kid")
//  }
//  else if (age>26){
//  	console.log("bachhe nhi rhe")
//  }
//  else if(age>38){
//  	console.log("yeh bache nhi rhe")
//  }
//  else if(age>18){
//  	console.log("18 bache nhi rhe")
//  }
//  else{
//  	console.log("bache rhe")
//  }

// var n=2;
// function square(num) {
//          var ans=num*num;
//          return ans;
	
// }
// var square2=square(n);
// var square4=square(4);
// console.log(square2, square4)

// var arr=[1,2,3,4,5,6,7]
// // console.log(arr);
// for(var i=0; i<arr.length; i++){
// 	if(i==2){
// 		// break;
// 	       continue;
// 	}
// console.log(arr[i]);
//
// arr.forEach(function(element){
// 	console.log(element)
// })

 
// const ac=0;
// ac++;

// let j=0;
// while(j<arr.length){
// 	console.log(arr[j])
// 	j++;
//}

// do{
// 	console.log(arr[j])
// 	j++;
// }while(j<arr.length);
 
//  let myArr=["fan","camera",420,null,true]
 // console.log(myArr.length)
 // myArr.pop();
 // myArr.push("Anurag")
 // myArr.shift(); 
 // myArr.unshift("Anurag")
 // const newLen=myArr.unshift("Anurag")
 // console.log(newLen)
 // console.log(myArr);

//  let myLovelyString="Anurag is a good boy"
 // console.log(myLovelyString.length)
 // console.log(myLovelyString.indexOf("good"))
 // console.log(myLovelyString.lastIndexOf("boy"))

 // console.log(myLovelyString.slice(0,4))
//  d=console.log(myLovelyString.replace("Anurag","Rahul"))
//  console.log(d, myLovelyString)

const done = true;

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built';
    resolve(workDone);
  } else {
    const why = 'Still working on something else';
    reject(why);
  }
});
