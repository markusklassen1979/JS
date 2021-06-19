// /**
//  * EXAMPLE 1
//  * 
//  * Simplest function in Javascripts
//  */
// function myFunction() {}

// console.log(myFunction); // ƒ myFunction() {}

// myFunction();

// const functionResult = myFunction();

// console.log(functionResult); // undefined

// console.log(myFunction()); // undefined

// console.log(myFunction(10, true)); // undefined

// /**
//  * EXAMPLE 2
//  * 
//  * Parameters of the function
//  */

// function myFunction(a, b) {
//     console.log(a);
//     console.log(b);
// }

// myFunction(10, 5); // 10, 5

// myFunction(true, null); // true, null

// myFunction(); // undefined, undefined

// myFunction("abc"); // abc, undefined

// console.log(myFunction(4,3)); // 4, 3, undefined

// /**
//  * EXAMPLE 3
//  * 
//  * Function scope
//  */
// function myFunction(a,b) {
//     console.log(a, b);
// }

// console.log(myFunction(3, 2));

// console.log(a);
// console.log(b);

// /**
//  * EXAMPLE 4
//  * 
//  * Reuse parameter names
//  */
// function myFunction1(a, b){
//     console.log(a, b);
// }

// function myFunction2(a, b){
//     console.log(a, b);
// }

// const a = true;
// const b = null;

// myFunction1(2,3); // 2,3

// myFunction2(5,7); // 5,7

// console.log(a,b); // ture null

// /**
//  * EXAMPLE 5
//  * 
//  * Add "return"
//  */
// function sum(a,b){
//     return a+b;
// }

// sum(10,5); // funciton return 15, but we se nothing in the console

// console.log(sum(2,5)); // 7
// console.log(sum(10,3)); // 13
// console.log(sum("abc",2)); // abc2
// console.log(sum()); // NaN

// /**
//  * EXAMPLE 6
//  * 
//  * What happens after return
//  */
// function myFunction(a) {
//     console.log(a);
//     return a; // funciton stops here
//     console.log(a);
//     const c = 20;
//     console.log(c);
// }

// myFunction(10);

// /**
//  * CHALLENGE 1
//  * 
//  * Create function called "mult" and it will have 3 parameters
//  * Create new variable and assign to it result of multiplicatoin of all 3 paramerers
//  * Print to the console restult of multiplication of all 3 paramers
//  * Don't use return.
//  */

// function mult(a,b,c){
//     const r = a*b*c;
//     console.log(r);
// }

// mult(0,3,5); // 0

// mult(2,3,5); // 30

// mult(0,3,"abc"); // NaN

// mult(); // NaN

// console.log(mult(2,3,5)); // 30 is printed inside of the function and funciton returns undefined

// /**
//  * CHALLENGE 2
//  * 
//  * Create a function called "concatenateString" and it will have 2 parameters.
//  * This functions will return concatenated strings
//  */

// function concatenateStrings(str1,str2){
//     return str1+" "+str2;
// }

// console.log(concatenateStrings("Hello","World"));

// /**
//  * CHALLENGE 3
//  * 
//  * Create function "outerFunction" with 2 parameters
//  * Create function inside of the "outerFunction" and name in "innerFunction" with one parameter
//  * This "innerFucntion" will return square of parameter (parameter*parameter)
//  * In the "outerFunction" sum both parameters
//  * Call "innerFunction" with argument that is equal to sum of both parameters of the "outerFunction"
//  * Log to the console result of the inner function
//  */

// function outerFunction(outpara1,outpara2){
//     function innerFunction(inpara){
//         return inpara*inpara;
//     }
//     console.log(innerFunction(outpara1+outpara2));
// }

// outerFunction(2,3); // 25

// outerFunction(3,7); // 100

