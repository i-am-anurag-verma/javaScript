// let cars = ['BMW', 'Tata', 'kia', 'Benz'];

// for(x of cars){
// console.log(x)

// }

var dateString = '13 Dec 2022';
var actualDate = new Date(dateString);
var newDate;

for(var i=1; i<=7; i++){
 newDate = new Date(actualDate.getFullYear(), actualDate.getMonth(),actualDate.getDay(), actualDate.getDate()+i);
}

console.log(newDate)