let student = {
    fname : "sakshi",
    lname : "rane",
    age : 22,
    skills : ["HTML", "CSS", "JS", "Python", "Django"]
}
student.year = function(){ // we can also add functions in object like this
    const year = new Date();
    return year.getFullYear();
}
console.log(student.year());

// let's discuss about the string ke methods
// there are various strings method using that we can perform various operations on them
// Whatever inside the single and double quotes are represents strings

let fname = "Sakshi" // with " " quotes
let lname = 'Rane' // with ' ' quotes
console.log(fname + " " + lname); // + use for concatenation of two strings

//Strings methods
console.log(fname.length) // 6 ==> length use to calculate the length of strings
console.log(lname.toUpperCase()) // RANE ==> all strings are in upper case
console.log(lname.toLowerCase()) // rane ==> all strings are in lower case
console.log(fname.charAt(2)) // k ==> returns the character at a specified index (position) in a string

let fruits = "Apple, Banana, Mango, Kiwi" // slice() extracts a part of a string and returns the extracted part in a new string.
console.log(fruits.slice(15, 20)) //The method takes 2 parameters: start position, and end position

let college = "        Hello Students!        "
console.log(college.trim()); //The trim() method removes whitespace from both sides of a string
console.log(college.trimStart()); //removes whitespace only from the start of a string
console.log(college.trimEnd()); //removes whitespace only from the end of a string

let text = "5"
console.log(text.padStart(6,"0")) // It pads a string with another string (multiple times) until it reaches a given length
console.log(text.padEnd(3,"x")) // padEnd() method pads a string from the end

function repeat(){
    let hey = "hello my name is alice\n"
    let repeated = hey.repeat(4) //repeat() method returns a string with a number of copies of a string
    return repeated
}
console.log(repeat())

function replace_string(){
    let intro = "My name is Sakshi Rane"
    let replace_word = intro.replace("Sakshi","Raj") // replace() method replaces only the first match
    return replace_word
}
console.log(replace_string())

function split_func(){
    let intro = "beautiful"
    let split_words = intro.split("") //If the separator is "", the returned array will be an array of single characters
    return split_words
}
console.log(split_func())

// indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1
function indexof(){
    let text = "Please locate where 'locate' occurs!";
    let index = text.indexOf("locate");
    return index
}
console.log(indexof());

// lastIndexOf() method returns the index of the last occurrence of a specified text in a string
function lastindexof(){
    let text = "Please locate where 'locate' occurs!";
    let index = text.lastIndexOf("locate");
    return index
}
console.log(lastindexof());

function search(){
    let text = "Please locate where 'locate' occurs!";
    let index = text.search("where");
    return index
}
console.log(search());