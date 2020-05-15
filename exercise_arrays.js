// *ARRAY FROM RANGE
const numbers = arrayFromRange(1, 5);

console.log(numbers);

function arrayFromRange(min, max) {
	const output = [];
	for (let i = min; i <= max; i++) output.push(i);
	return output;
}

// *INCLUDES
const number = [1, 3, 5, 7];

console.log(includes(numbers, 3));

function includes(array, searchElement) {
	for (let num of array) if (num === searchElement) return true;
	return false;
}

// *EXCEPT
const myArray = [1, 2, 3, 4, 5, 6, 7, 3, 5, 6, 5];

const output = except(myArray, [5, 6, 7]);

function except(array, excluded) {
	const output = [];
	for (let element of array)
		if (!excluded.includes(element)) output.push(element);
	return output;
}
// ----------------------------------------------------------------
