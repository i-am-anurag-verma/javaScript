async function abc(){
    try{
        const result = await new Promise((resolve, reject)=> {
            setTimeout(()=> reject('failure'), 3000)
        });
        console.log(result)
    }catch(error){
        console.log("promise failed")
    }
    
    // prms.then(res => console.log(res));
}

abc();