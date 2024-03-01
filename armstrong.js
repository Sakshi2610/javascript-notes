function isArmstrong(num){
    let sum = 0
    let digits = num.toString().split("")
    let power = digits.length

    for (let digit of digits){
        sum = sum + Math.pow(parseInt(digit), power)
    }
    return sum === num
}

let num = 153 // true
// let num = 10 // false
console.log(isArmstrong(num))