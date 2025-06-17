console.log("Day 1: JavaScript Basics");

let name = "Alice";
const age = 20;
var isStudent = true;
let arr = [1, 2, 3];
let obj = {  
    name: "Bob",
    age: 25
};

let obj2 = obj;

// console.log("Name: ", arr[1])

// console.log(2 + "5");


// console.log("5" + 2);     // "52" (number is coerced to string)
// console.log("5" - 2);     // 3 (string is coerced to number)
// console.log(true + 1);    // 2 (true is 1)

const id1 = Symbol("userID");
const id2 = Symbol("userID"); // Looks the same but is different!

// const id1 = "userId";
// const id2 = "userId";

// console.log(id1 === id2); // false


const user = {
  name: "Asha",
  [id1]: 101,
  [id2]: 102
};

// console.log(user); // Object contains both unique symbol keys



// let a = 10;
// let b = 3;

// console.log(a + b);  // 13
// console.log(a - b);  // 7
// console.log(a * b);  // 30
// console.log(a / b);  // 3.333...
// console.log(a % b);  // 1 (remainder)

// console.log(5 == "5");   // true (type coercion)
// console.log(5 === "5");  // false (strict equality)
// console.log(5 != 4);     // true
// console.log(5 > 3);      // true
// console.log(5 < 10);     // true
// console.log(5 >= 5);     // true
// console.log(5 <= 6);     // true

// let x = 10;
// let y = 20;

// console.log(x < y && x > 5);   // true
// console.log(x > y || y == 20); // true
// console.log(!(x == 10));       // false

// let score = 85;

// if (score > 90) {
//   console.log("Grade A");
// } else if (score >= 75) {
//   console.log("Grade B");
// } else {
//   console.log("Needs Improvement");
// }

// for (let i = 1; i <= 5; i++) {
//   console.log("Number: " + i);
// }

// let i = 1;
// while (i <= 5) {
//   console.log("While loop: " + i);
//   i++;
// }

// let count = 1;
// do {
//   console.log("Do While Count: " + count);
//   count++;
// } while (count <= 3);


// const student = {
//   name: "Asha",
//   age: 19,
//   course: "Computer Science"
// };

// iterates over properties in an object

// for (let key in student) {
//   console.log(key + ": " + student[key]);
// }

//  iterates over values in an array

const fruits = ["Apple", "Banana", "Mango"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// console.log(fruits[0], fruits[1], fruits[2]);

// // tricky concepts
// console.log(Number("5") + 1); 
// console.log("5" - 1);  
// console.log(null + 1);
// console.log(undefined + 1);
// console.log("5" * 2);
// console.log("5" / 2); 
// console.log("5" == 5); 
// console.log("5" === 5);
// console.log(true + true);
// console.log(true + false);
// console.log(false + false);
// console.log("5" + true);
// console.log("5" - true);
// console.log("5" * true);
// console.log("5" / true);
// console.log("5" + null);
// console.log("5" - null);
// console.log("5" * null);
// console.log(("5" / null) * false);

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

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// var is function-scoped
// let is block-scoped 

// for (let j = 0; j < 3; j++) {
//   setTimeout(() => console.log(j), 1000);
// }

// let arr = [1, 2, 3];
// console.log(arr[5]); // undefined, not an error






