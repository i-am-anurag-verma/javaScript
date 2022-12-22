const arr = [1];
let mf = 0;
let count = 0;
let item;
if (arr.length) {
        for (let i = 0; i < arr.length; i++) {
                for (let j = i; j < arr.length; j++) {
                        if (arr[i] == arr[j]) {
                                count++;
                        }
                        if (mf < count) {
                                mf = count;
                                item = arr[i];
                        }
                }
                count = 0;
        }
        console.log(`${item} ( ${mf} times )`);
} else {
        console.log('empty')
}
