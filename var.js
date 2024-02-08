/*var let and const

var ==> in var if we specify var with same name it overrides
code:- */
console.log(name) //undefined
var name = "sakshi"
console.log(name) //sakshi
var name = "divya"
console.log(name) // divya
console.log("----------------------------------------------------------------------")
/*^^ in above code when we does not assign value then it gives undefined
but when we assign the value in same name it overrides the  value and print the overrided value

--------------- to overcome this JavaScript introduces let ------------------------------------ */

var age = 22
if(age){
console.log(age) // 22 coz it prints above age value i.e. 22
var age = 20
console.log(age);  // after again declaration it overrides the value i.e. 20
}
console.log(age) // and here also it will printed the overrided value i.e. 20