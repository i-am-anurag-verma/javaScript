function divisible(num) {

    if (num % 3 == 0 && num % 5 == 0) {
        return "AB";
    } else if (num % 3 == 0) {
        return "A"
    } else if (num % 5 == 0) {
        return "B"
    } else {
        return "Invalid input"
    }
}
console.log(divisible(1141))

