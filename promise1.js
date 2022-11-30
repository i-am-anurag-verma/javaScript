const mypromise = new Promise((resolve, reject) =>{
    const a =1;
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