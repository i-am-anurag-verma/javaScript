function armstrong_num(num){
    let temp = num;
    let sum = 0;

    while(temp>0){
        let rem = temp % 10;
        sum = sum + rem*rem*rem;
        temp = parseInt(temp/10)
    }
    if(sum == num){
        return `${num} is armstrong number.`;
    }else{
        return `${num} is not a armstrong number.`;
    }
}
console.log(armstrong_num(372))