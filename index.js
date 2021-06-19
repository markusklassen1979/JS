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