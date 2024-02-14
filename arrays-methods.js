// what is array ? ==> An array is a special variable, which can hold more than one value
const cars = [
    "Mercedes",
    "BMW",
    "Bugatti"
]
console.log(cars);
// the question is why we need an arrays ? ==> suppose now above in cars there is only 3 car models what if there are let's say 
// 100 or more than that models so The solution is an array! An array can hold many values under a single name, and you can access the 
// values by referring to an index number.
// -----------------------------------------------------------------------------------------------------------------

// another way is You can also create an array, and then provide the elements
const fruits = []
fruits[0] = "Mango"
fruits[1] = "Apple"
fruits[2] = "Kiwi"
console.log(fruits);

// using the "new" keyword
const colors = new Array("Red","Blue","Green")
console.log(colors);

// we access an array element by referring to the index number
console.log(cars[1])
console.log(fruits[0])
console.log(colors[2])

// changing an array elements
colors[1] = "Black"
console.log(colors);

// toString() method ==> toString() converts an array to a string of (comma separated) array values
function array_to_strings(){
    const food = ["Fast-Food", "Diet Food", "Non-Veg Food", "Veg Food"]
    const strings = food.toString()
    return strings
}
console.log("Conversion of array to strings: ",array_to_strings())

// Arrays are Objects
console.log(typeof(colors))  // returns object
// but array uses numbers to access its elements eg below
console.log(colors[2]) // Green
// but objects uses keys or names to access its members
const pen = {
    type : "ballpoint",
    color : "black",
    work_of_pen : function (){
        console.log("The pen is used for writing...")
    }
}
console.log(pen['work_of_pen']()) 

// ------------------------------------------------Arrays are special kinds of objects.--------------------------------------------------------------
// and that's why array main different types ke variables hote hain
//You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array
const myArray = []
myArray[0] = pen // pen is an object
myArray[1] = array_to_strings // array_to_strings is an function 
myArray[2] = cars // cars is an array
console.log(myArray); // it shows all the things which we include like objects, funtions and arrays

// length ==>  returns the length of an array
console.log(cars.length)

// Looping Array Elements using for
let cars_len = cars.length
for (let i = 0; i < cars_len; i++) {
    const element = cars[i];
    console.log(element);
}
console.log("---------------------------------------------");
// Looping Array Elements using forEach()
colors.forEach(myColors)
function myColors(i){
    const value = i
    console.log(value)
}

// Adding Array Elements
// using push
console.log("before adding new element",colors);
colors.push("Yellow")
console.log("after adding new element using push",colors);

// How do I know if a variable is an array?
// cause typeof operator return array as a object
// we use new method called Array.isArray()
console.log(typeof(colors)) // object
console.log(Array.isArray(colors)) //true

// at() method ==>  returns an indexed element from an array.
console.log(colors.at(1));

// join() ==> joins all array elements into a string It just like toString(), but in addition you can specify the separator
const subjects = ["Maths", "Science", "English"]
console.log(subjects.join("**"));

// pop() method ==> removes the last element from an array
const names = ["sakshi", "raj", "divya", "gayatri", "hritika"]
names.pop()
console.log(names)

// push() ==> adds a new element to an array (at the end)
names.push("bob")
console.log(names)

// shift() method ==> removes the first array element and "shifts" all other elements to a lower index
names.shift()
console.log(names);

// unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
names.unshift("alice")
console.log(names)

// slice() method slices out a piece of an array into a new array
console.log(names.slice(2));