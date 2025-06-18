let globalVar = "I'm global";

function testScope() {
  let localVar = "I'm local";
  if (true) {
    let blockVar = "I'm block-scoped";
    console.log(blockVar);
  }
  console.log(globalVar);
  console.log(localVar);
}
// testScope();
// console.log(localVar); // Error


function greet() {
  console.log("Hello, world!");
}
// greet(); // Invocation


function add(a, b) {
  return a + b;
}
// console.log(add(5, 3)); // Output: 8

const addArrow = (a, b) => {
    return a + b;
}

let colors = ["red", "green"];
// console.log(colors.length);

const random = ["tree", 795, [0, 1, 2]];
random[2][2];
// console.log(colors[0]);
// console.log("Index of green: ", colors.indexOf("green"));

colors.push("blue");
// console.log(colors);      
colors.pop();   
// console.log(colors);          
colors.unshift("yellow");
// console.log(colors);
colors.shift();
// console.log(colors);
colors.splice(1, 1);
// console.log(colors);
colors.push("purple", "orange");
colors.splice(1, 0, "pink");
colors.push("red");
// console.log(colors.includes("red"));
// console.log(colors.lastIndexOf("red"));

for (const color in colors) {
  console.log(color);
}

const num = [1, 2, 3, 4, 5, 6, 1];

let num2 = num.find((item, index) => item < 2);
let numx = num.find(item => {
  return item < 2;
})
// console.log(num2);

let num3 = num.findLast((item) => item < 2);
// console.log(num3);

function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
// console.log(doubled);
const doubled2 = numbers.map((number) => number * 2);

function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
// console.log(longer);

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const citiesFromString = data.split("@");
// console.log(citiesFromString);

const joinedCities = citiesFromString.join(" - ");
// console.log(joinedCities);

const numbersArray = [1, 2, 3, 4, 5];
// console.log(Array.isArray(numbersArray));

// console.log(Array.of([1,2,3]));

// console.log(Array.from("foo"));

// let str = "foo";

// console.log(str.split(""));

console.log(Array.from([1, 2, 3], (x) => x + x));
let newArr = [1,2,3].map((x) => x + x);

let dummyArr = new Array(5).fill("dummy");
let dummyArr2 = new Array(1, 2, 3, 4, 5);

let emptyObject = {};

let arrOfObjects = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];

// for(const value of arrOfObjects) {
//   emptyObject[value.name] = value;
// }

let arObjects = {
  ["Alice"] : { name: "Alice", age: 30 },
  ["Bob"] : { name: "Bob", age: 25 },
  ["Charlie"] : { name: "Charlie", age: 35 }
};

let objOfObjects = arrOfObjects.reduce((acc, obj) => {
  // acc[obj.name] = obj;
  acc = { ...acc, [obj.name]: obj };
  return acc;
}, emptyObject);

// console.log(objOfObjects);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let person = {
  name: "Alice",
  age: 30,
  greet: function() {
    return `Hello, I'm ${this.name}`;
  }
};

// console.log(person.name);    
// console.log(person["age"]);  
// console.log(person.greet()); 

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

//  Spread operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
// console.log(arr2);

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
// console.log(obj2);

function objectKeysAsParameters(key1, key2, key3) {
    console.log(`Key 1: ${key1}`);
    console.log(`Key 2: ${key2}`);
    console.log(`Key 3: ${key3}`);
}
// objectKeysAsParameters(...Object.keys(obj2));
// objectKeysAsParameters(1,2,3,4);

//  JSON notation
let jsonString = '{"name":"John", "age":25}';
let user = JSON.parse(jsonString);     // JSON string to object
// console.log(user.name);                // John

let backToJson = JSON.stringify(user); // Object to JSON string
// console.log(backToJson);












// const arr2 = [0, 1, [2, [3, [4, 5]]]];
// Recursive function to flatten an array