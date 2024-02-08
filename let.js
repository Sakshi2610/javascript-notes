/* 
    let ==> what does let do ???
    Code :- */
//console.log(name) //name is not defined or cannot access name before intialization
let name = "raj"
console.log(name) // raj
// let name = "sakshi" //SyntaxError: Identifier 'name' has already been declared
// console.log(name); 
name = "sakshi"
console.log(name); // it updates the name value, not like var in var it overrides the value but when we use let it simply updates it

/* --------------- to overcome this above updating the value JavaScript introduces const ------------------------------------------ */

let age = 22
if(age){
// console.log(age) // it says cannot access age before initialization because it's in if block and the age is not defined here
let age = 20
console.log(age);  // now here it prints the value 20 as O/P cause we declare it in block so it consider if block
}
console.log(age) // since it is in outside of the if block it prints the value 22 cause it assuems the whole code as block here
