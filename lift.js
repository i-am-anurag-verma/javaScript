

// const floor = 10;
// const visitPlace = [6,5,7,3,8, 9];

// const liftStart = (totalFloor, stopFloor) => {
//     for(let i = 1; i <= totalFloor ; i ++) {
//          stopFloor.forEach(ele => {
//             if(ele === i) {
//                 console.log("Stop at " + i);
            
//             }
//          })
//     }
// }

// liftStart(floor, visitPlace)

const mypromise = new Promise((resolve, reject) =>{
    const a =0;
    setTimeout(()=>{
        if(a===1){
            resolve('promise success!')
        } else {
            reject('promise failed!')
        }
    },1000)
});

mypromise.then((result) => {
    console.log('=====then==',result)
}).catch((error) => {
    console.log('====catch', error) 
}).finally(() => {
    console.log('=====finally')
})