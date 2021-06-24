// /**
//  * SECTION 1
//  * 
//  * Arithmetic Operators
//  */
// let a,b;
// a = 1;
// b = 2;

// // Math with numbers
// console.log(a + b); // 3
// console.log(a * b); // 2
// console.log(a / b); // 0.5
// console.log(a - b); // -1

// a = "abc";
// b = 5;

// // Math with non number
// console.log(a + b); // abc5
// console.log(a * b); // NaN
// console.log(a / b); // NaN
// console.log(a - b); // NaN

// a = "Hello";
// b = "World";
// // Strings concatenation
// console.log(a + " " + b);

// let c = "1";

// // Unary plus
// console.log(+c); // 1
// console.log(Number(c)); // 1
// c = undefined
// console.log(+c); // NaN

// // Unary minus
// c = "5";
// console.log(-c); // -5
// c = "abc"
// console.log(-c); // NaN

// // ++ 
// let d = 5;
// ++d;
// console.log(d); // 6
// d++
// console.log(d); // 7

// console.log(++d); //8
// console.log(d++); //8
// console.log(d); // 9

// // --
// console.log(d--); // 9
// console.log(d); // 8
// console.log(--d); // 7
// console.log(d); // 7

// /**
//  * SECTION 2
//  * 
//  * Comparisson operators
//  */
// // Number comparisson
// let a, b;

// a = 5;
// b = 7;
// c = 5;

// console.log(a < b);
// console.log(a > b);

// console.log(a <= c);
// console.log(a >= c);

// console.log("_______")


// // String comparisson
// let myStr1, myStr2, myStr3;

// myStr1 = "abc";
// myStr2 = "bcd";
// myStr3 = "Bcd";
// // Sorted strings "Bcd", "abc", "bcd"

// console.log(myStr1 > myStr2); // false

// console.log(myStr1 < myStr2); // true

// console.log(myStr1 > myStr3); // true

// console.log("_______")

// // Equality operators
// // NEVER USE "==" AND "!="
// let myString = "0";
// let myNumber = 0;
// let myBoolean = false;

// // Types of the values may be different
// console.log(myString == myNumber); // true
// console.log(myNumber == myBoolean); //true
// console.log(myString == myBoolean); //true

// // TYEP and VALUE are compared
// console.log(myString === myNumber); // false
// console.log(myNumber === myBoolean); //false
// console.log(myString === myBoolean); //false

// // How you should compare variables of different types
// console.log(Number(myString) === myNumber); // true
// console.log(+myString === myNumber); // true

// console.log(myString != myNumber); // false
// console.log(myString !== myNumber); // true

// console.log(null === undefined); // false

// console.log(null == undefined); // true

// console.log(0 === "" === null === undefined === false); // true

/**
 * SECTION 3
 * 
 * Logical operators
 */
console.log(true || false); // true
console.log(false || true); // true
console.log("abc" || ""); // abc
console.log("" || "abc"); // abc
console.log("" || ""); // ""
// Falsy values
console.log("" || 0 || null || undefined || NaN || false); // false

console.log("______");

let city;
const defaultCity = "New York";

let myCity = city || defaultCity;
console.log(myCity);

console.log("______");

let myOtherCity = city || console.log("Fill in city please") || defaultCity;
console.log(myOtherCity);

console.log("______");

city = "Los Angeles";
myCity = city || defaultCity;
console.log(myCity);