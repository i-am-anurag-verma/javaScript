// console.log("Hello World")

// var promise = new Promise(function(resolve, reject){
// 	const x=5;
// 	const y=5;
// 	if(x==y){
// 		resolve();
// 	}else{
// 		reject();
// 	}
// })
// promise.then(function(){
// 	console.log('success, you are passed');
// }).catch(function(){
// 	console.log('some error has occured');
// })


// then() 
// var promise = new Promise(function(resolve, reject){
// 	resolve('anurag')
// })
// promise.then(function(successMessge){
// 	console.log('successMessage')
// },function(errorMessage){
// 	console.log('errorMessage')
// })


// catch()
// // var promise = new Promise(function(resolve, reject){
// // 	reject('promise rejected');
// // })	 
// // promise.then(function(sucess){
// // 	console.log('you are success')
// // }).catch(() => {
// // 		console.log('some error occured ');
// // 	})


// var promise= new Promise((resolve, reject)=>{
// 	throw new error('some error has occured')
// })
// promise.then(()=>{
// 	console.log('successMessage')

// }).catch(()=>{
// 	console.log('status:error')
// })

// function job(){
// 	return new Promise(function(resolve, reject){
// 		reject("I love you")
// 	})
// }
// let promise=job()
// promise
// .then(function(){
// 	console.log('success 1')
// })
// .then(function(){
// 	console.log('success 2')
// })
// .catch(function(message){
// 	console.log('errorMessage '+message) //Question
// })
// .then(()=>{
// 	console.log('success 3')
// })
 

// // function job(state){
// // 	return new Promise((resolve, reject)=>{
// // 		if(state){
// // 			resolve('success');
// // 		}else{
// // 			reject('error')
// // 		}
// // 	})
// // }
// // let promise=job(true)

// // promise.then((data)=>{
// // 	console.log('ram:',data)
// // 	return job(true)
// // })
// // .then((data)=>{
// //      if(data!='victory'){
// // 		 throw 'defeat';
// // 	 }
// // })
// // .then((data)=>{
// // 	console.log('anu:',data)
// // })
// // .catch((error)=>{
// // 	console.log(error)
// // 	return job(false)
// // })
// // .then((data)=>{
// // 	console.log('nitu:',data)

// // 	return job(true)
// // })
// // .catch((error)=>{
// // 	console.log(error)
// // 	return 'error caught'
// // })
// // .then((data)=>{
// // 	console.log(data)
// // 	return new error('test')
// // })
// // .then((data)=>{
// // 	console.log('success:', data.message)
// // })
// // .catch((data)=>{
// // 	console.log('error:', data.message)
// // })


// let p1 = new Promise(function (resolve, reject) {
// 	setTimeout(resolve, 500, 'p1');
// });

// let p2 = new Promise(function (resolve, reject) {
// 	setTimeout(resolve, 1000, 'p2');
// });

// let p3 = new Promise(function (resolve, reject) {
// 	setTimeout(resolve, 1200, 'p3');
// });

// let p4 = new Promise(function (resolve, reject) {
// 	setTimeout(reject, 300, 'p4');
// });

// let p5 = new Promise(function (resolve, reject) {
// 	setTimeout(resolve, 800, 'p5');
// });

// let promise = Promise.all([p1.catch(function () { }), p2.catch(function () { }), p3.catch(function () { }), p4.catch(function () { }), p5.catch(function () { })]);

// promise

// 	.then(function (data) {
// 		data.forEach(function (data) {

// 			console.log(data);
// 		});
// 	})

// 	.catch(function (error) {
// 		console.error('error', error);
// 	});


// // const promise1= new Promise((resolve, reject)=>{
// 	setTimeout(resolve, 500, 'one');
// // });

// // const promise2= new Promise((resolve,reject)=>{
// 	setTimeout(resolve,100, 'two');
// });
// // Promise.race([promise1, promise2]).then((value)=>{
// 	console.log(value)
// })

// function delay(time){
// 	return new Promise((resolve)=>{
// 		setTimeout(resolve,time, 'success: '+time)
// 	})
// }
// Promise.race([delay(500),delay(100)]).then((data)=>{
// 	console.log(data)
// })


// function myDisplayer(some){
// 	document.getElementById('demo').innerHTML = some;
// }
// async function myFunction(){ return "Hello";}
// myFunction().then(
// 	function(value) {myDisplayer(value);},
// 	function(error) {myDisplayer(error);}
// )


// function resolveAfter2second(){
// 	return new Promise(resolve=>{
// 		setTimeout(()=>{
// 			resolve('Resolved');
// 		},2000);
// 	});
// }
// async function asyncCall(){
// 	console.log('calling');
// 	const result = await resolveAfter2second();
// 	console.log(result);
// }
// asyncCall();


// const doSomethingAsync= ()=>{
// 	return new Promise(resolve=>{
// 		setTimeout(()=>resolve('i did something'),3000)
// 	})
// }
// const doSomething = async ()=>{
//      console.log(await doSomethingAsync())
// }
// console.log('before')
// doSomething();
// console.log('after')


// var today = new Date();
// var dd = today.getDate();

// var mm = today.getMonth();
// var yyyy = today.getFullYear();
// if(dd<10){
// 	dd='0'+dd;
// }
// if(mm<10){
// 	mm = '0'+mm;
// }
// today=mm+'-'+dd+'-'+yyyy;
// console.log(today)
// today = dd+'/'+mm+'/'+yyyy; //dd/mm/yyyy
// console.log(today)


// const promise=()=>{
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>resolve('I Love You !!'),2000)
// 	})
// }
// const watchOver = async () => {
// 	const something = await promise()
// 	return something + '\nand I watched'
// }
// watchOver().then(res=>{
// 	console.log(res)
// })


// const fun1=()=>{
// 	setTimeout(()=>{
// 		console.log('fun1 is starting')
// 	},3000);
// }
// const fun2=()=>{
// 	console.log('fun2 is starting')
// 	fun1();
// 	console.log('fun2 is ending')
// }
//   fun2();

  
// async function wait() {
// 	await new Promise(resolve => setTimeout(resolve, 1000));
  
// 	return 10;
//   }
  
//   function f() {
// 	// shows 10 after 1 second
// 	wait().then(result => console.log(result));
//   }
  
//   f();

// window.onload = function() {

// 	// create a couple of elements in an otherwise empty HTML page
// 	const heading = document.createElement("h1");
// 	const heading_text = document.createTextNode("Big Head!");
// 	heading.appendChild(heading_text);
// 	document.body.appendChild(heading);
// }


// class Thenable {
// 	constructor(num) {
// 	  this.num = num;
// 	}
// 	then(resolve, reject) {
// 	  alert(resolve);
// 	  // resolve with this.num*2 after 1000ms
// 	  setTimeout(() => resolve(this.num * 2), 1000); // (*)
// 	}
//   }
  
//   async function f() {
// 	// waits for 1 second, then result becomes 2
// 	let result = await new Thenable(4);
//      console.log(result);
//   }
  
//   f();



// function myfunction(){
// 	let text;
// 	let person=prompt("Please enter the name", "Harry potter")
// 	if(person==null || person==""){
// 		text = "user cancel the prompt";
// 	}else{
// 		text="Hello "+person+" How are you today!!"
// 	}
// 	document.getElementById("demo").innerHTML=text;

// }

new Promise( (ok) => {
	ok( 
	)
 }).then( () => {
 }).then( () => {
	  console.log("something")
	  console.log("something else")
 })
 
 console.log("This code has no errors GG!")