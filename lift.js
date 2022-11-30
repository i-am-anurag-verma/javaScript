//6 7 8

const floor = 10;
const visitPlace = [6,5,7,3,8, 9];

const liftStart = (totalFloor, stopFloor) => {
    for(let i = 1; i <= totalFloor ; i ++) {
         stopFloor.forEach(ele => {
            if(ele === i) {
                console.log("Stop at " + i);
            
            }
         })
    }
}

liftStart(floor, visitPlace)