let p = fetch("https://jsonplaceholder.typicode.com/users");
let w = fetch('https://weatherapi-com.p.rapidapi.com/future.json?q=London&dt=2022-12-25')

p.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    return response.json()
}).then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})