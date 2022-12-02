

const floor = 10;
const visitPlace = [6];

const liftStart = (liftName, totalFloor, stopFloor) => {
    //console.log("totalFloor ===>", totalFloor)
    for(let i = 1; i <= totalFloor ; i ++) {
         stopFloor.forEach(ele => {
            if(ele === i) {
               
            console.log(liftName + " lift stop at ", i)
            }
         })
    }
}

liftStart('second lift',floor, visitPlace)

liftStart('first lift',8, [4,5])

liftStart('third lift', 20, [12, 17])