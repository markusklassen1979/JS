let myVariable;

console.log(myVariable); // undefined

myVariable = 10;

console.log(myVariable); // 10

myVariable = true;

console.log(myVariable); // true

myVariable = {
    x: true,
    y: 10
}

console.log(myVariable); // {...}

myVariable.y = 20;

console.log(myVariable); // {...}

myVariable = null;

myVariable.x = false; // Uncaught TypeError: Cannot set property 'x' of null


// /**
//  * CHALLENGE
//  */
// let newVariable;
// newVariable = null;
// console.log(newVariable);
// newVariable = 15;
// console.log(newVariable);
// newVariable = false;
// console.log(newVariable);