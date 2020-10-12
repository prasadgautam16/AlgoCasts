/** @format */

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// const reverse = (str) => {
//     return str.split('').reverse().join('');
// };

const reverse = (str) => {
	let reverseString = "";
	for (let i = 0; i < str.length; i++) {
		reverseString = str[i] + reverseString;
	}
	return reverseString;
};

module.exports = reverse;
