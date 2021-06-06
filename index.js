// /**
//  * EXAMPLE 1 - Create object and modify its properties
//  */
// let myObject;

// myObject = {
//   a: 10,
//   b: "abc"
// };

// console.log(myObject);

// myObject.a = 15;

// console.log(myObject);

// myObject.c = true;

// console.log(myObject);

// delete myObject.b;

// console.log(myObject);

// console.log(myObject.a);

// /**
//  * CHALLENGE 1
//  * 
//  * Create variable called "myPost"
//  * Initial value shoudl be {}
//  * Add property called "postTitle" and value "Object is refernece type"
//  * Add oen more property "postLikes" with value 0
//  * Add third property "shared" and set its value to "false"
//  * Increase value of the "postLikes" by 1
//  * Delete property "shared"
//  */

// myPost = {};

// console.log(myPost);

// myPost.postTitle = "Object is reference type";

// console.log(myPost);

// myPost.postLikes = 0;

// console.log(myPost);

// myPost.shared = false;

// console.log(myPost);

// myPost.postLikes += 1;

// console.log(myPost);

// delete myPost.shared;

// console.log(myPost);

// /**
//  * EXAMPLE 2
//  * 
//  * Use "const" for object declaration
//  */
// const myObject = {};

// myObject.a = true; // NO ERROR! Variable is not reassigned

// console.log(myObject);

// myObject = {
//     a: true // index.js:74 Uncaught TypeError: Assignment to constant variable.
// }; 

// /**
//  * CHALLENGE 2
//  * 
//  * Create variable "myObject" and add property "a" - 10
//  * Create another varialbe "copyOfMyObject" and its value should be myObject
//  * Add a new property "b" with value false to the "copyOfMyObject"
//  * Print to the console "myObject" and copyOfMyObject and iterpret the results 
//  */

// let myObject = {
//     a: 10
// };

// let copyOfMyObject = myObject;

// copyOfMyObject.b = false;

// console.log(myObject);

// console.log(copyOfMyObject);

// /**
//  * EXAMPLE 3
//  * 
//  * Bracket notation
//  */
// let myObject = {
//     a: true,
//     b: null,
//     c: 25
// };

// console.log(myObject["a"]); // true

// // console.log(myObject[a]); // index.js:110 Uncaught ReferenceError: a is not defined

// console.log(myObject["b"]); // null

// const propertyName = "c";

// console.log(myObject[propertyName]); // 25

// console.log(myObject["propertyName"]); // undefined

// myObject["new" + "Property" + "Name"] = "Value for dynamicly computed property name";

// console.log(myObject);

