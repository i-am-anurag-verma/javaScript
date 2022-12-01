const myPromise = new Promise((resolve, reject)=>{
    const x = 5;
    setTimeout(()=>{
        if(x == 5){
            resolve("Promise success!")
        }else{
            reject("Promise failed!")
        }
    },2000)
});

myPromise.then((result)=>{
    console.log("===then===", result)
}).catch((error)=>{
    console.log("===catch===", result)
}).finally(()=>{
    console.log("===finally====")
});