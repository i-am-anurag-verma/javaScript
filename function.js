// function myFunc(){
    
//     let a = "Block"

//     //variable b can not be used here
//     if(a == 'Block'){

//         //variable b can be used here
//         let b = 'Scope'
//         console.log(a+ ' ' +b)
//     }
//     //variable b can not be used here
//     console.log(a);
// }

// var x = 'Function';
// myFunc();

// function myFun(){

//     var x = 'Function Scope';
//     console.log("========>>>>",x)
// }
// console.log("========>",x)
// myFun()

// let fun = (name, age)=> "Good Morning " + name + " ====Age is " + age

// console.log(fun("Ram", 25))


// const greet = ()=> ({name:"Rahul"})

// console.log(greet())


var variable = "Global Level Variable";
let myObject = { 
 variable: "Object Level Variable", 
arrowFunction:() => { 
 console.log("========1",this.variable); 
 },
regularFunction(){ 
 console.log("======2",this.variable); 
 } 
};
myObject.arrowFunction(); 
myObject.regularFunction();