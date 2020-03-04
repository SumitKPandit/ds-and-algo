/*
	Date: 24 February 2020
	Name: Sumit Kumar Pandit
	Description: Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
	Time Complexity - O(n)
	Space Complexity - O(1)
*/

function countUniqueValues(arr) {
	if(arr.length == 0) {
		return 0;
	}
	if(arr.length == 1) {
		return 1;
	}
	let currentElement, lastElement;
	let result = 0;
	if(arr.length >= 2) {
		for(let i = 1; i < arr.length; i++) {
			currentElement = arr[i];
			lastElement = arr[i - 1];
			if(lastElement != currentElement) {
				result++;
			}
		}
	}
	return result + 1;
}

// Testing
console.log(`Array: [1, 1, 1, 1, 1, 2] -> ${countUniqueValues([1, 1, 1, 1, 1, 2])}`);
console.log(`Array: [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13] -> ${countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])}`);
console.log(`Array: [] -> ${countUniqueValues([])}`);
console.log(`Array: [-2, -1, -1, 0, 1] -> ${countUniqueValues([-2, -1, -1, 0, 1])}`);
