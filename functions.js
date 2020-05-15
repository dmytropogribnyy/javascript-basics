// *FUNCTION DECLARATION
function walk() {
	console.log("Walk");
}

// *FUNCTION EXPRESSION
let run = function () {
	console.log("Run");
};
// -------------------------------------------------
// *REST OPERATOR
function sum(discount, ...prices) {
	const total = prices.reduce((a, b) => a + b);
	return total * (1 - discount);
}

console.log(sum(0.1, 25, 30));
// ----------------------------------------------
// *DEFAULT PARAMETERS - INTEREST RATE
function interest(principal, rate = 3.5, years) {
	return ((principal * rate) / 100) * years;
}
console.log(interest(10000, undefined, 5));
// -------------------------------------------

// *GETTERS & SETTERS &&  TRY CATCH BLOCKS (THROW & HANDLE AN EXCEPTION)
const person = {
	first: "Steve",
	last: "Newman",
	//using get fullName become a property
	get fullName() {
		return `${person.first} ${person.last}`;
	},
	set fullName(value) {
		if (typeof value !== "string") throw new Error("Value is not a string.");

		const parts = value.split(" ");
		if (parts.length < 2) throw new Error("Enter a first and last name.");

		this.first = parts[0];
		this.last = parts[1];
	}
};

// getters => access properties
// setters => change (mutate) them
try {
	person.fullName = "John";
} catch (e) {
	console.log(e);
}

console.log(person);
// -------------------------------------------
// *DIFFERNCE BETWEEN VAR & LET, CONST
// var is function-scoped
// let, const are block-scoped

// *this => references the object thatis executing the current function
const video = {
	title: "a",
	play() {
		console.log(this);
	}
};

video.play();
// ---------------------------------------------------

// *Using this in ***Constructor*** function
function Video(title) {
	this.title = title;
	console.log(this);
}

const v = new Video("b");

function playVideo(a, b) {
	console.log(this);
}

playVideo.call({ name: "Dmitry" }, 1, 2);
playVideo.apply({ name: "Dmitry" }, [1, 2]);
const fn = playVideo.bind({ name: "Dmitry" });
fn();
// ----------------------------------------------------------
