// // tricky concepts
// console.log("5" + 1);   // "51" → String + Number = String
// console.log("5" - 1);   // 4   → String - Number = Number
// console.log(null + 1);  // 1   → null becomes 0
// console.log(undefined + 1); // NaN → undefined can't be converted to number
// console.log("5" * 2);   // 10  → String * Number = Number
// console.log("5" / 2);   // 2.5 → String / Number
// console.log("5" == 5);  // true → String is coerced to Number
// console.log("5" === 5); // false → Strict equality, no coercion
// console.log(true + true); // 2 → true is 1, so 1 +
// console.log(true + false); // 1 → true is 1, false is 0
// console.log(false + false); // 0 → both are 0
// console.log("5" + true); // "5true" → String + Boolean = String
// console.log("5" - true); // 4 → String - Boolean = Number
// console.log("5" * true); // 5 → String * Boolean = Number
// console.log("5" / true); // 5 → String / Boolean = Number
// console.log("5" + null); // "5null" → String + null = String
// console.log("5" - null); // 5 → String - null = Number
// console.log("5" * null); // 0 → String * null = Number (null is 0)
// console.log("5" / null); // Infinity → String / null =

// console.log(a); // undefined
// var a = 5;

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 10;


// console.log(typeof null);      // "object" → a known bug!
// console.log(typeof NaN);       // "number" → NaN is still considered a number
// console.log(typeof []);        // "object" → arrays are also objects
// console.log(typeof {});        // "object" → objects are of type object
// console.log(typeof function(){}); // "function" → functions are a special type of object
// console.log(typeof Symbol());  // "symbol" → symbols are a unique type
// console.log(typeof BigInt(12345678901234567890)); // "bigint"

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000); // Prints 3, 3, 3
// }

// var is function-scoped
// let is block-scoped 

// for (let j = 0; j < 3; j++) {
//   setTimeout(() => console.log(j), 1000); // Prints 0, 1, 2
// }

// let arr = [1, 2, 3];
// console.log(arr[5]); // undefined, not an error