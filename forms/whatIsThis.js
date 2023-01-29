// let counter = {
//     count : 0,
//     increment : function(){
//         counter.count++;
//     }

// }

let counter = createCounter();
let counter1 = createCounter();

function createCounter() {
  return {
    count: 0,
    increment: function () {
      this.count++;
      console.log(this)
    },
  };
}

counter.increment();
counter.increment();
counter1.increment();
counter1.increment();
console.log(counter);
