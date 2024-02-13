/* JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object 
*/

/* Datatypes are very important without data types a computer cannot safely sove anything
    When adding a number and a string, JavaScript will treat the number as a string.*/
let x = 16 + "Volvo";
console.log(x);     // 16Volvo
let x1 = "Volvo" + 16;
console.log(x1);    //Volvo16

//JavaScript evaluates expressions from left to right. Different sequences can produce different results:
let num1 = 16 + 4 + "Volvo"; //JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".
console.log(num1);    //-----------20Volvo  
let num2 = "Volvo" + 16 + 4; //since the first operand is a string, all operands are treated as strings.
console.log(num2);      // --------------Volvo164

// 1. String ==> Strings are written with quotes. You can use single or double quotes
let name = "sakshi"
let lname = 'rane'
console.log(name+ " "+lname);

// 2. Number ==> All JavaScript numbers are stored as decimal numbers and Numbers can be written with, or without decimals
let a1 = 47.00
let a2 = 47
console.log(a1+" and "+a2);

// 3. Bigint ==> JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.
let bigintvalue = BigInt("123456789012345678901234567890");
console.log(bigintvalue);

// 4. Boolean ==> Booleans can only have two values: true or false.
let n1 = 4
let n2 = 4
let n3 = 8
console.log(n1 == n2)
console.log(n1 == n3)

// 5. Undefined ==> a variable without a value, has the value undefined.
let car
console.log(car);

// 6. Null 
let fruit = null
console.log(fruit);

// 7. Symbol ==> represents a unique identifier
const sym1 = Symbol();
console.log(sym1);

// 8. Object ==> JavaScript objects are written with curly braces {}.
//Object properties are written as name:value pairs, separated by commas.

const book = {
    name : "Harry Potter",
    author : "J. k. Rowling",
    Genre : "Magic"
}
console.log(book.name); // in two ways we can console with dot(.) operator
console.log(book['Genre']); // 2nd with square braces['']

//we can add in object with following ways like
book.Characters = ["Harry", "Ron", "Hermione"]
console.log(book.Characters);

//with curly braces
book['parts_of_harry_potter'] = 8
console.log("Parts of Harry Potter : ",book['parts_of_harry_potter']);