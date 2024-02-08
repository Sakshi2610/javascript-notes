/* 
    const ==> what does const do ???
    Code :- */
//console.log(name) //name is not defined or cannot access name before intialization
const name = "raj"
console.log(name) // raj
// let name = "sakshi" //SyntaxError: Identifier 'name' has already been declared
// console.log(name); 
//name = "sakshi"
//console.log(name); // TypeError: Assignment to constant variable.

/* in above code you see when we do console.log before const it says cannot access name before initialization
    and also when we declare name again it does not override like var and does not update the value like let it simply says
    does not assign to constant variable cause "ONCE WE ASSIGN A VALUE TO CONST VARIABLE WE CANNOT CHENGE IT OR UPDATE IT." */

const age = 22
if(age){
//console.log(age) // it says cannot access age before initialization because it's in if block and the age is not defined here
const age = 20
console.log("inside block",age);  // now here it prints the value 20 as O/P cause we declare it in block so it consider if block
}
console.log("outside block",age) // since it is in outside of the if block it prints the value 22 cause it assuems the whole 
                                 // code as block here

/* --------------------------------------------------------NOTE------------------------------------------------------------------

                                                let and const are "BLOCK SCOPED"
                                                
--------------------------------------------------------------------------------------------------------------------------------*/