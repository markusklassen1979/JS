// /**
//  * CHALLENGE 1
//  * 
//  * Declare variable "myObject" and assign value {}.
//  * Print this variable to the console.
//  * NOTE: variable "myObject" will NOT be reassigned in the future
//  */

// const myObject = {};

// console.log(myObject);

// // myObject = {}; // Uncaught TypeError: Assignment to constant variable.

/**
 * CHALLENGE 2
 * 
 * Declare "x" and assign value 10 to it.
 * Declare "y" and assign value true to it.
 * Declare "myObject" and assign object with two name-value pairs.
 * Declare "anotherObject".
 * Later assign value to it - object with three name-value pairs
 */
let x = 10;
const y = true;
const myObject = {
    a: x, 
    b: y
}; 
console.log(myObject);
/**
 * {a: 10, b: true, __proto__: Object}
 */
x = 20;
let anotherObject;
anotherObject = {
    newA: x, 
    b: true, 
    c: myObject
};
console.log(anotherObject);
/**
 * {
 * newA: 20,
 * b: true,
 * c: {a:10, b:true, __proto__: Object},
 * __proto__: Object
 * }
 */

