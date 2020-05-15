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

// *********************************
// object can contain various types includingfunctions & objects itself
// ***OBJECT ORIENTED STYLE OF PROGRAMMING***
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 2,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

// *the function inside of an object is a METHOD*
circle.draw(); //Method
// ----------------------------------------------------

// *FACTORY FUNCTIONS*
// 1.
function createCircle(radius) {
  return {
    radius, //equal to radius: radius
    draw() {
      console.log("draw"); //we can omit a word function inside of another function
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

// 2.
const address = {
  street: "a",
  city: "b",
  zipCode: 61145,
};

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

const address1 = createAddress("a", "b", 61145);
console.log(address1);
// ******************************************************

// *Another approach is to use CONSTRUCTOR FUNCTION*
// 1.
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle3 = new Circle(1);
console.log(circle3);

// 2.
function Address(street, city, zipCode) {
  (this.street = street), (this.city = city), (this.zipCode = zipCode);
}

const address2 = new Address("a", "b", 61145);
console.log(address2);
// **********************************************************

const circle4 = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

if ("radius" in circle4) console.log("Yes");
// --------------------------------------------------------------
// ***WAYS OF CLONING AN OBJECT***
// 1.
const another = Object.assign({
  color: "yellow"
}, circle4); //in curly braces we can even add additional property
console.log(another);

// 2. SPREAD OPERATOR
const another2 = {
  ...circle4
};
console.log(another2);
// --------------------------------------------------------------------
// *GET A RANDOM NUMBER BETWEEN TWO VALUES*
function getArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getArbitrary(1, 10));

// - Math.round(1.9)
// Math.max(1,2,3,4,5)
// **************************************************************************

// *We have String Primitives as wel as String Objects in JavaScript
// So we can use string object properties & methods on string primitives
const sms = "This is my message";
console.log(sms.length);
console.log(sms.toUpperCase());
console.log(sms.toLowerCase());
console.log(sms.substring(0, 7));
console.log(sms.split(""));
console.log(sms.indexOf("s", 1));
console.log(sms[8]);
console.log(sms.includes("my"));
console.log(sms.replace("my", "your"));
console.log(sms.trim());
// ******************************************************************************

// *TEMPLATE LITERAL
const name = "John";
const message = `Hi, ${name}.
How's it getting on?`;
console.log(message);
// *********************************************************************************

// ***DATE BUILT-IN OBJECT***
const now = new Date(); //Date Constructor
console.log(now.toDateString());
console.log(now.toTimeString());

// const date1 = new Date("May 10 2020 21:00");
// console.log(date1);

// const date2 = new Date(2020, 4, 10, 21);
// console.log(date2);
