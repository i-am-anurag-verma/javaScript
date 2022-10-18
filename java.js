// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(false);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);
// });



function job(state) {
    debugger;
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise

.then(function(data) {
    debugger;
    console.log("data=>", data);

    return job(true);
})

.then(function(data) {
    debugger;
    console.log('data==>',data)
    if (data !== 'victory') {
        console.log('data 1==>',data)
        throw 'Defeat';
    }
    return job(true);
})

.then(function(data) {
    debugger;
    console.log('hello:', data);
})

.catch(function(error) {
    debugger;
    console.log('Result:', error);

    return job(false);
})

.then(function(data) {
    debugger;
    console.log('Given:', data);

    return job(true);
})

.catch(function(error) {
    debugger;
    console.log(error);

    return 'Error caught';
})

.then(function(data) {
    debugger;
    console.log(data);

    return new Error('test');
})

.then(function(data) {
    debugger;
    console.log('Success:', data.message);
})

.catch(function(data) {
    debugger;
    console.log('Error:', data.message);
});



// function func1() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const error = true;//question
//             if (!error) {
//                 console.log('function: your promise has been resolved')
//                 resolve();
//             }
//             else {
//                 console.log('function: your promise has not been resolved')
//                 reject('sorry not fulfill');
//             }
//         }, 2000)
//     })
// }


// func1().then(function () {
//     console.log("Rahul: thanks for resolving")
// }).catch(function (error) {
//     console.log("Rahul: very bad bro. Reason:" + error)



// const students = [
//     { name: "harry", subject: "javascript" },
//     { name: "Rohan", subject: "machine learnig" }
// ]

// function enrollstudent(student, callback) {
//     setTimeout(function () {
//         student.push(student);
//         console.log("student has been enrolled");
//         callback();
//     }, 1000);
// }
// function getstudents() {
//     setTimeout(function (student) {
//         let str = "";
//         student, forEach(function (student) {
//             str += '<li>${student.name}</li>'
//         })
//         document.getElementById('students').innerHTML = str;
//     }, 5000);
//     let newstudent = { name: "sunny", subject: "python" }
//     enrollstudent(newstudent, getstudents)
// }

// let p = new Promise(function(resolve, reject){
//     let a = 1 + 2
//     if (a == 2) {
//         resolve('success')
//     } else {
//         reject('failed')
//     }
// })

// p.then((message) => {
//     console.log('this is the then ' + message)
//     }).catch((message) => {
//     console.log('this is the catch ' + message)
// })

// async function sunny(){
//     console.log('inside the func function');
//     const response= await fetch('https://api.github.com/users')
//     const users=await response.json()
//     console.log('users resolved')
//     return users;
// }
// console.log("before calling sunny")
// let a=sunny();
// console.log(a);
// a.then(data=> console.log(data))
// console.log("last line of this js file")