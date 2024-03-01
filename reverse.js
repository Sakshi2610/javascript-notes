function reverseNum(num){
    let reversed = 0

    while(num>0){
        digit = num % 10;
        reversed = (reversed * 10) + digit;
        num = Math.floor(num/10)
    }
    return reversed
}

let num = 12345
console.log(reverseNum(num))