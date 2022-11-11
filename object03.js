var obj = {
    name:"Max",
    age:30,
    id: 1234,
    class:"B"
}
console.log("Before deleted")
console.log(obj);

delete obj.id
console.log("After Deleted")
console.log(obj)