const today = new Date();
const day = today.getDay();

const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log("Today is ", dayList[day]);

const hour = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

if(hour >= 12 && hour <= 24){
    prepand = 'PM'
}else{
    prepand = 'AM'
}
console.log(`Time is ${hour}: ${minutes}: ${seconds} ${prepand}`);