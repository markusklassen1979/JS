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

let c = "1";

// Unary plus
console.log(+c); // 1
console.log(Number(c)); // 1
c = undefined
console.log(+c); // NaN

// Unary minus
c = "5";
console.log(-c); // -5
c = "abc"
console.log(-c); // NaN

// ++ 
let d = 5;
++d;
console.log(d); // 6
d++
console.log(d); // 7

console.log(++d); //8
console.log(d++); //8
console.log(d); // 9

// --
console.log(d--); // 9
console.log(d); // 8
console.log(--d); // 7
console.log(d); // 7