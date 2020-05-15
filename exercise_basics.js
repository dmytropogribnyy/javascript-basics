// MAX OF TWO
//define fucntion that takes 2 nunbers and returns
// the maximum of the two
function max(a, b) {
  return a > b ? a : b;
}

let number = max(4, 2);
console.log(number);

// ******************************

// LANDSCAPE OR PORTRAIT
let image = isLandscape(800, 600);
console.log(image);

function isLandscape(width, height) {
  return width > height;
}
// *********************************

// FizzBuzz
const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return Nan;
  if (input % 15 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input;
}
// ************************************

// DEMERIT POINTS
// CheckSpeed
// speed limit =70
// 5 -> 1
// Math.floor(1.3)
// 12 points -> suspended license
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return; //to jump out of the loop
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License is suspended");
  else console.log("Points", points);
}

checkSpeed(95);
// **************************************

// EVEN AND ODD NUMBERS
// function showNumbers(limit) {
//   for (i = 0; i <= limit; i++) {
//     if (i % 2 === 0) console.log(i, "EVEN");
//     else console.log(i, "ODD");
//   }
// }

// ?we can simplify our code
function showNumbers(limit) {
  for (i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}

showNumbers(10);
// *********************************************

// COUNT Truthy
function countTruthy(array) {
  let count = 0;
  for (let value of array)
    if (value) count++;
  return count;
}

const array = [0, "", NaN, 5, 4, 2, false, undefined, null];
console.log(countTruthy(array));
// *************************************************

// STRING PROPERTIES
const movie = {
  title: "a",
  releaseYear: 2020,
  director: "b",
  rating: 4.8,
};

showProperties(movie);

function showProperties(object) {
  for (let key in object)
    if (typeof object[key] === "string") console.log(key, object[key]);
}
// ********************************************************

// SUM OF MULTIPLES OF 3 AND 5
function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0) sum += i;

  return sum;
}

console.log(sum(10));
// ****************************************************************

// GRADE
const marks = [80, 80, 50];
//average = 70
//1-59 = F
//60-69 = D
//70-79 = C
//80-89 = B
// 90-100 = A
console.log(calculateGrade(marks));

// calculate average grade function
function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

//calculate sum and average function
function calculateAverage(array) {
  let sum = 0;
  for (let value of array) sum += value;
  return sum / array.length;
}
// **************************************************************************

// SHOW STARS
showStars(10);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
}
// *****************************************************************************

// PRIME NUMBERS
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}

showPrimes(20);
// *******************************************************************************
