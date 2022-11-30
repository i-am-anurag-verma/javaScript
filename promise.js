let myPromise = new Promise(function(myResolve, myReject) {
    let x = 5;
  
  // some code (try to change x to 5)
  
    if (x == 0) {
      myResolve("promise success");
    } else {
      myReject("promise failed");
    }
  });
  
  myPromise.then((result)=>{
  console.log("====then",result)
  }).catch((error)=>{
  console.log("====catch", error)
  }).finally(()=>{
  console.log("=====finally")
  });