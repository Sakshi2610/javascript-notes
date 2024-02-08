/* JavaScript comments can be used to explain JavaScript code, and to make it more readable.
JavaScript comments can also be used to prevent execution, when testing alternative code.
1. Single Line Comments
Single line comments start with //

2. Multi-line Comments
Multi-line comments start with /* and end with */
// ---------------------------------------------------------------------------------------------------------------------------------

/* There are different types of JavaScript operators:
* Arithmetic Operators *
Operator	Description
+	        Addition
-	        Subtraction
*	        Multiplication
**	        Exponentiation
/	        Division
%	        Modulus
++	        Increment
--	        Decrement */
let num1 = 20
let num2 = 30
console.log("Addition is: ", num1 + num2);
console.log("Subtraction is: ", num1 - num2);
console.log("Multiplication is: ", num1 * num2);
console.log("Exponentiation is: ", num1 ** 2);
console.log("Division is: ", num1 / num2);
console.log("Modulus is: ", num1 % num2);
console.log("Increment is: ", num1++);
console.log("Decrement is: ", num2--);
console.log("------------------------------------------------------");
/* Assignment Operators
Operator	Example	    Same As
=	        x = y	    x = y
+=	        x += y	    x = x + y
-=	        x -= y	    x = x - y
*=	        x *= y	    x = x * y
/=	        x /= y	    x = x / y
%=	        x %= y	    x = x % y
**=	        x **= y	    x = x ** y */
x = 10
y = 5

x += y
console.log("x += y is:", x) 

x -= y  
console.log("x -= y is:", x)

x *= y  
console.log("x *= y is:", x)

x /= y  
console.log("x /= y is:", x) 

x %= y  
console.log("x %= y is:", x) 

x = 2
y = 3
x **= y  
console.log("x **= y is:", x) 
console.log("------------------------------------------------------");

/* Comparison Operators
Operator	Description
==	        equal to
===	        equal value and equal type
!=	        not equal
!==	        not equal value or not equal type
>	        greater than
<	        less than
>=	        greater than or equal to
<=	        less than or equal to
?	        ternary operator */
// Assigning values to variables
let a = 5;
let b = 10;

console.log("a == b:", a == b); 
console.log("a === b:", a === b); // equal type and equal value that's why types are same but O/P come as false, cause in and both values should be true
console.log("a != b:", a != b); 
console.log("a !== b:", a !== b); // not equal value or not equal type that's why o/p come as true coz either the condition is true
console.log("a > b:", a > b); 
console.log("a < b:", a < b); 
console.log("a >= b:", a >= b);
console.log("a <= b:", a <= b);

let result = (a > b) ? "a is greater than b" : "a is not greater than b";
console.log(result);
console.log("------------------------------------------------------");

/* String Operators */
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2; //John Doe
console.log(text3);
console.log("------------------------------------------------------");

/*Logical Operators
Operator	Description
&&	logical and
||	logical or
!	logical not */ 
let m = true;
let n = false;
console.log("m && n:", m && n); 
console.log("m || n:", m || n); 
console.log("!m:", !m);
console.log("!n:", !n);
console.log("-----------------------------------------------------");

/*Bitwise Operators
console.log("------------------------------------------------------");
Operator	Description	            Example	    Same as	        Result	Decimal
&	        AND	                    5 & 1	    0101 & 0001	    0001	 1
|	        OR	                    5 | 1	    0101 | 0001	    0101	 5
~	        NOT	                    ~ 5	        ~0101	        1010	 10
^	        XOR	                    5 ^ 1	    0101 ^ 0001	    0100	 4
<<	        left shift	            5 << 1	    0101 << 1	    1010	 10
>>	        right shift	            5 >> 1	    0101 >> 1	    0010	  2
>>>	        unsigned right shift	5 >>> 1	    0101 >>> 1	    0010	  2 */


/*Ternary Operators
discuss above

Type Operators
Operator	Description
typeof	    Returns the type of a variable
instanceof	Returns true if an object is an instance of an object type */