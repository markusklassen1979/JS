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

// /**
//  * SECTION 3
//  * 
//  * Logical operators
//  */
// // OR Operator
// console.log(true || false); // true
// console.log(false || true); // true
// console.log("abc" || ""); // abc
// console.log("" || "abc"); // abc
// console.log("" || ""); // ""
// // Falsy values
// console.log("" || 0 || null || undefined || NaN || false); // false

// console.log("______");

// let city;
// const defaultCity = "New York";

// let myCity = city || defaultCity;
// console.log(myCity);

// console.log("______");

// let myOtherCity = city || console.log("Fill in city please") || defaultCity;
// console.log(myOtherCity);

// console.log("______");

// city = "Los Angeles";
// myCity = city || defaultCity;
// console.log(myCity);

// console.log("______");

// // AND operator
// console.log(true && false); // false
// console.log(false && true); // false

// // AND returns value of the first falsy operand
// console.log("abc" && 10 && false && "" && "abcd"); // false
// console.log("abc" && 10 && NaN && "" && "abcd"); // Nan
// console.log("abc" && 10 && "" && "abcd"); // ""

// // All operands are truthy
// console.log("abc" && 10 && true && 123 && "Hello World"); // Hello World

// // NOT operator !
// console.log("______");

// console.log(!"abc"); //false
// console.log(!""); // true
// console.log(!0); // true

// let myVariable;
// myVariable = undefined;
// console.log(!myVariable); // true

// myVariable = "Markus";
// console.log(!myVariable); // false

// // Quick trytht/falsy check
// myVariable = null;
// console.log(!!myVariable); // false
// myVariable = 10;
// console.log(!!myVariable); // true

// /**
//  * SECTION 4
//  * 
//  * Operators precedence
//  */
// console.log(2 + 4 * 10); // 42
// console.log((2 + 4) * 10); // 60

// let a;
// a = 1;
// a = a + 5;  // First "+", second "="
// console.log(a); // 6

// /**
//  * SECTION 5
//  * 
//  * Operators Associativity
//  */
// let a, b;
// b = 3;

// a = b = 5; // right to tleft
// console.log(a, b); // a=5, b=5

// console.log(4 + 5 + 6); // 15 - left to right
// console.log(6 + 4 + 5); // 15 - left to right

// console.log(5 * 10 / 2); // 25
// console.log(5 * 10 / 2 / 5); // 5 left to right

// /**
//  * TASK 1
//  * 
//  * Compare 2 variables "myVariable1" and "myVariable2".
//  * Log to the console "true" if "myVariable1" is less than or equal to myVariable2.
//  * Convert both variables to numbers before comparison.
//  */
// let myVariable1 = 10;
// let myVariable2 = "5";

// console.log(+myVariable1 <= +myVariable2); // false

// myVariable1 = "20";
// myVariable2 = 100;

// console.log(+myVariable1 <= +myVariable2); // true

// /**
//  * TASK 2
//  * 
//  * Print to the console remainder of the division of "myNumber1" by "myNumber2".
//  * Which precedence and associativity has this operator?
//  */
// let myNumber1 = 10;
// let myNumber2 = 3;

// // Precedence 15 left to right
// console.log(myNumber1 % myNumber2);
// console.log(25 % 5); // 0
// console.log(14 % 8); // 6
// console.log(100 % 30 % 3); // 1

// /**
//  * TASK 3
//  * 
//  * What will be logged to the console?
//  */
// console.log(3 || true && null || false); 
// // STEP 1: true && null -> null
// // STEP 2: 3 || null -> 3
// // Result: 3

// /**
//  * TASK 4
//  * 
//  * Find alternatives
//  */
// let a = 10;

// //a = a + 1;
// //a += 1;

// //a = a * 2;
// //a *= 2;

// //a = a - 5;
// //a -= 5

// //a = a / 2;
// //a /= 2;

