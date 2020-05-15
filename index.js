// This is my first JavaScript Code!
console.log("Hello World");
//camel notation of variables in js
let firstName = "Mosh";
console.log(firstName);

// we can use several vars on one line
//TODO seperate them by using comma
//? let name = 'Dmitry', surname = "Pogribnyy";
// but a modern approach is one var on 1 line
// let name = "Dmitry";
// let age = 30;
let isApproved = true; // Boolean Literal
let other; // it's undefined Literal
let selectedColor = null;
// console.log(name, surname);

//! OBJECT LITERAL
let person = {
  name: "Dmitry",
  age: 30,
};
// Dot Notation
person.name = "John";
// Bracket NotationЛЩ
person["name"] = "Mary";
// dynamic way
let selection = "name";
person[selection] = "Mary";
console.log(person.name);

// !constant
const interestRate = 0.3;
// so attempt of re-assigning returns an error
// interestRate = 1;
console.log(interestRate);

//TODO can print typeof in browser console to get type of var
// typeof person

//! ARRAYS
// we initialize an empty array
let selectedColors = ["red", "blue"];
console.log(selectedColors[0]);
// array is dynamic too as a variable in js
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors.length);

//! FUNCTIONS
// TODO performing a task
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

// TODO calculating a value
function square(number) {
  return number * number;
}

greet("John", "Smith");
console.log(square(4));

//! Arithmetic operators
let x = 10;
let y = 5;
// (x + y) is an expression
// expression produces a value
console.log(x + y);

// ? INCREMENT (++)
// console.log(++x); result is 11
console.log(x++); // result is 10 but 11 on the next line call
console.log(x);

// ? DECREMENT (--)
console.log(--x);

//! COMPARISON OPERATORS
// Equality
let num = 1;
console.log(num === 1);
console.log(num !== 1);

//TODO: STRICT EQUALITY (checks type + value)
console.log(1 === 1);
console.log("1" === 1);

//TODO: LOOSE EQUALITY (checks only value)
console.log(1 == 1);
console.log(true == 1);

// !TERNARY OR CONDITIONAL OPERATOR
let points = 110;
let type = points > 100 ? "gold" : "silver";
console.log(type);

// !LOGICAL OPERATORS
// AND &&
console.log(true && true);
// OR ||
// '||' is a short-circuit operator
let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
console.log(currentColor);
// NOT !
// '!' means that person is not eligible for loan
// let applicationRefused = !eligibleForLoan

// ! BITWISE OPERATORS
// Read, Write, Execute (8 bits = 1 byte)
// 00000100 (read)
// 0000010 (write)
// 00000001 (execute)

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | writePermission;
let message = myPermission & readPermission ? "yes" : "no";
console.log(message);
console.log(true == 1);
console.log(1 == true);

// !SWAPPING VARIABLES
let a = "red";
let b = "blue";
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);

// !IF ELSE
let hour = 16;
if (hour >= 6 && hour < 12) console.log("Good morning!");
else if (hour >= 12 && hour < 18) console.log("Good afternoon!");
else console.log("Good evening!");

// !SWITCH CASE
let role = "guest";
switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
}

// todo: we can use if else here - it's cleaner way!

let role1 = "guest";
if (role1 === "guest") console.log("Guest User");
else if (role1 === "moderator") console.log("Moderator User");
else console.log("Unknowm User");

// !for
// for (initialExpression; condition; incrementExpression) {
//   statement
// }
for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

// !while
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

// !do while
let j = 9;
do {
  if (j % 2 !== 0) console.log(j);
} while (j <= 5);

// !for..in
// 1 for.. in for object
const human = {
  name: "Dmitry",
  age: 40,
};
for (let key in human) console.log(key, human[key]); //human[key] means: get "human of key" === "value of this key"

// 2 for..in for array
// const colors = ["red", "green", "blue"];
// for (index in colors) console.log(index, colors[index]);

// !for..of is a modern way (ES6) to iterate over ARRAYS & MAPS
const colors = ["red", "green", "blue"];
for (let color of colors) console.log(color);

// ! can use forEach method as well
const fruits = ["apple", "orange", "mango"];

fruits.forEach((fruit) => console.log(fruit));
// or use with index
fruits.forEach((fruit, index) => console.log(index, fruit));

// todo But we can use for..of loop to iterate over object too
// todo Using Object.keys() or Object.entries() methods
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

for (let key of Object.keys(circle)) console.log(key);
// or
for (let entry of Object.entries(circle)) console.log(entry);
// ****************************************************************************

// !break & continue
let h = 0;
while (h < 10) {
  // if (h === 5) break;
  if (h % 2 === 0) {
    h++;
    continue; //continue returns to the start of the loop
    //and jumps to the next iteration
  }
  console.log(h);
  h++;
}
