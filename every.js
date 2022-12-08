const ages = [20, 21, 24, 25, 11]

ages.every(checkAge)

function checkAge(age){
    return age > 18
}

console.log(ages.every(checkAge))