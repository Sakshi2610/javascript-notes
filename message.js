function encodeMessage(message){
    let words = message.split(" ");
    encode = "";

    for (let i=0; i<words.length; i+=3){
        let firstWord = words[i];
        let secondWord = words[i+1] || "";
        let thirdWord = words[i+2] || "";

        firstWord = firstWord.replace(/[aeiou]/gi, "%");
        secondWord = secondWord.replace(/[bcdfghjklmnpqrstvwxyz]/gi, "#");
        thirdWord = thirdWord.toUpperCase();
        encode = encode + firstWord + secondWord + thirdWord + " ";
    }
    return encode.trim();
}

let message = "Where are you? Meet me near the clock tower"
console.log(encodeMessage(message))