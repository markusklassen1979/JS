/**
 * SECTION 1
 * 
 * Arithmetic Operators
 */
let a,b;
a = 1;
b = 2;

// Math with numbers
console.log(a + b); // 3
console.log(a * b); // 2
console.log(a / b); // 0.5
console.log(a - b); // -1

a = "abc";
b = 5;

// Math with non number
console.log(a + b); // abc5
console.log(a * b); // NaN
console.log(a / b); // NaN
console.log(a - b); // NaN

a = "Hello";
b = "World";
// Strings concatenation
console.log(a + " " + b);