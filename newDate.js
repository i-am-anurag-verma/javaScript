let arr = [];
let day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

let today = Date.now();

for (let i = 0; i <= 30; i++) {
    let obj = {}
    obj[today] = day[new Date(today).getDay()]
    arr.push(obj);

    today += 86400000;

}
// document.write(arr)
console.log(arr)