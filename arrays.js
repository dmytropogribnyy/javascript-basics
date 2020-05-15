// ***ARRAYS***
// *ADD*
const numbers = [3, 4];
numbers.push(5, 6);

numbers.unshift(1, 2);

numbers.splice(2, 0, "a");
console.log(numbers);
console.log();

// ***FIND ELEMENT****
const letters = ["a", "b", "c", "d", "a", "e"];
console.log(letters.indexOf("b"));
console.log(letters.indexOf("a", 2)); //returns element from indicated index (second parameter)
console.log(letters.lastIndexOf("c"));
console.log(letters.includes("f"));

// ***FIND REFERENCE TYPE ELEMENT****
const courses = [
	{
		id: 1,
		name: "a",
	},
	{
		id: 2,
		name: "b",
	},
];

// find
//? const course = courses.find(function (course) {
//?     return course.name === "a";
//? })

// *FROM ES6 WE CAN USE ***ARROW FUNCTION*** INSTEAD OF ABOVE
const course = courses.find((course) => course.name === "a");

console.log(course);

// findIndex
const course1 = courses.findIndex(function (course) {
	return course.name === "a";
});

console.log(course1);

// --------------------------------------------------------------------------
// ***REMOVE ELEMENTS***
const number = [1, 2, 3, 4, 5];
console.log(number);

number.pop();
console.log(number);

number.shift();
console.log(number);

number.splice(1, 1);
console.log(number);

// -------------------------------------------------------------------------------
// ***EMPTYING AN ARRAY***
let colors = ["red", "green", "blue"];
// Solution 1
// colors = [];
// console.log(colors);

// Solution 2
colors.length = 0;
console.log(colors);
// -----------------------------------------------------------------------------------
// ***COMBINING & SLICING***
const first = [1, 2, 3];
const second = [
	{
		id: 10,
	},
];

// 1. Using CONCAT
const combined = first.concat(second);
second[0].id = 1;
console.log(combined);

// 2. Using SPREAD
const combined2 = [...first, "a", ...second, "b"];
console.log(combined2);
// ***COPY***
const copy = [...combined2];

// get copy of original array
// const slice = combined.slice(); //as option can choose start and end position
// or
const slice = combined.slice(1, 3);
console.log(slice);
// -----------------------------------------------------------------------------------
// *ITERATE AN ARRAY
const fruits = ["apple", "orange", "mango"];
// Solution 1
for (fruit of fruits) console.log(fruit);

// Solution 2  using forEach
fruits.forEach((fruit) => console.log(fruit));
// or use with index
fruits.forEach((fruit, index) => console.log(index, fruit));

// ---------------------------------------------------------------------------------------
// ***JOIN & SPLIT***
const vehicles = ["car", "bike", "plane"];
const joined = vehicles.join(", ");
console.log(joined);

const myMessage = "This is my new car";
const parts = myMessage.split(" ");
console.log(parts);

const combine = parts.join("-");
console.log(combine);
// ------------------------------------------------------------------------------------------
// ***SORTING ARRAYS***
console.log(vehicles.sort());
console.log(vehicles.reverse());

const languages = [
	{
		id: 1,
		name: "Python",
	},
	{
		id: 2,
		name: "JavaScript",
	},
];

languages.sort(function (a, b) {
	const nameA = a.name.toLowerCase();
	const nameB = b.name.toLowerCase();

	if (nameA < nameB) return -1;
	if (nameA > nameB) return 1;
	return 0;
});

console.log(languages);
// ------------------------------------------------------------------------------

// ***TESTING THE ELEMENTS OF AN ARRAY***
const digits1 = [1, 2, 3, 4, 5];
// 1. Every
const allPositive = digits1.every(function (value) {
	return value >= 0;
});

console.log(allPositive);

// 2. Some
const digits2 = [1, 2, 3, -3, 4, -5];

const somePositive = digits2.some(function (value) {
	return value >= 0;
});

console.log(somePositive);
// ------------------------------------------------------------------------------

// ***Filter an Array***
const filtered = digits2.filter(function (value) {
	return value >= 0;
});
console.log(filtered);

// here we can use arrow function instead
const filtered2 = digits2.filter((n) => n >= 0);
console.log(filtered2);
// ------------------------------------------------------------

// ***MAP an ARRAY***
const mapped = filtered.map((n) => "<li>" + n + "</li>");
console.log(mapped);

const html = "<ul>" + mapped.join("") + "</ul>";
console.log(html);

// can return not a string but an object form this mapping above
const mapped2 = filtered.map((n) => ({ value: n }));

console.log(mapped2);

// *can use filter & map in chain:
const items = digits2.filter((n) => n >= 0).map((n) => ({ value: n }));
console.log(items);
// ----------------------------------------------------------

// ***REDUCE*** Sum of numbers
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// for (let n of num) sum += n;
// console.log(sum);
const sum = num.reduce(
	(accumularor, currentValue) => accumularor + currentValue
);
