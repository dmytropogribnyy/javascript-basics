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
