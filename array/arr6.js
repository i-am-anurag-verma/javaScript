let arr = [3, 'a', 'a', 'a', 2,,2,2,2,2,2,2,2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let count = {};
let largest = 0;
let mostFrequent;
arr.forEach((element, index) => {
    //console.log(index, ': =>', count, ' --' , mostFrequent ,"--" ,largest)

    if (count[element]) {
          count[element] += 1;
    }
    else {
        count[element] = 1
    }

    if(count[element] > largest) {
        largest = count[element];
        mostFrequent = element;
    }
    console.log(index, ': =>', count, ' --' ,largest ,"--" ,mostFrequent)
})

console.log(count, mostFrequent + "    -  " +largest)