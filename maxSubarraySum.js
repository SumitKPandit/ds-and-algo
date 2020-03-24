/*
	Date		:	5 March 2020
	Author		:	Sumit Kumar Pandit
	Description	:	Given an array of integers and a number, write a
					function called maxSubarraySum, which finds the
					maximum sum of a subarray with the length of the
					number passed to the function.
					Note that a subarray must consist of consecutive
					elements from the original array. In the first
					example below, [100, 200, 300] is a subarray of the
					original array, but [100, 300] is not.
	Time		:	O(N)
	Space		:	O(1)
*/

function maxSubarraySum1(arr, number) {
	let sum1 = 0;
	let highest = 0;
	const length = arr.length;
	if(number > length){
		return null;
	}
	for ( let i = 0; i < length; i++){
		let sum1 = 0;
		for ( let j = i; j < i + number; j++){
			sum1 = arr[j] + sum1;
		}
		if (sum1 > highest ){
			highest = sum1;
		}
	}
	return highest;
}

function maxSubarraySum2(arr, number) {
	let sum1 = 0;
	let highest = 0;
	let i = 0;
	let flag = 0;
	const length = arr.length;
	if(number > length){
		return null;
	}
	for(let j = i; j < (i + number); j++) {
		sum1 = arr[j] + sum1;
		if(j === (i + number - 1)) {
			if(sum1 > highest) {
				highest = sum1;
			}
			sum1 = 0;
			j = i; 
			i = i + 1;
		}
		if( j >= (length - 1)) {
			break;
		}
	}
	return highest;
}

function maxSubarraySum3(arr, number) {
	if(arr.length < number) {
		return null;
	}
	let endPos = arr.length - number;
	let sum = 0, tempSum = 0;
	for(let i = 0; i < number; i++) {
		sum = sum + arr[i];
	}
	tempSum = sum;
	for(let i = 1; i <= endPos; i++) {
		tempSum = tempSum - arr[i - 1] + arr[i + number - 1];
		if(tempSum > sum) {
			sum = tempSum;
		}
	}
	return sum;
}


// Testing
const {performance} = require('perf_hooks');

const timeA = performance.nodeTiming.duration;

console.log(`maxSubarraySum1([100, 200, 300, 400], 2) -> ${
	maxSubarraySum1([100, 200, 300, 400], 2)}`);
console.log(`maxSubarraySum1([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) -> ${
	maxSubarraySum1([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)}`);
console.log(`maxSubarraySum1([-3, 4, 0, -2, 6, -1], 2) -> ${
	maxSubarraySum1([-3, 4, 0, -2, 6, -1], 2)}`);
console.log(`maxSubarraySum1([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) -> ${
	maxSubarraySum1([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)}`);
console.log(`maxSubarraySum1([2, 3], 3) -> ${
	maxSubarraySum1([2, 3], 3)}`);

const timeB = performance.nodeTiming.duration;

console.log(`maxSubarraySum2([100, 200, 300, 400], 2) -> ${
	maxSubarraySum2([100, 200, 300, 400], 2)}`);
console.log(`maxSubarraySum2([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) -> ${
	maxSubarraySum2([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)}`);
console.log(`maxSubarraySum2([-3, 4, 0, -2, 6, -1], 2) -> ${
	maxSubarraySum2([-3, 4, 0, -2, 6, -1], 2)}`);
console.log(`maxSubarraySum2([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) -> ${
	maxSubarraySum2([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)}`);
console.log(`maxSubarraySum2([2, 3], 3) -> ${
	maxSubarraySum2([2, 3], 3)}`);

const timeC = performance.nodeTiming.duration;

console.log(`maxSubarraySum3([100, 200, 300, 400], 2) -> ${
	maxSubarraySum3([100, 200, 300, 400], 2)}`);
console.log(`maxSubarraySum3([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) -> ${
	maxSubarraySum3([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)}`);
console.log(`maxSubarraySum3([-3, 4, 0, -2, 6, -1], 2) -> ${
	maxSubarraySum3([-3, 4, 0, -2, 6, -1], 2)}`);
console.log(`maxSubarraySum3([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) -> ${
	maxSubarraySum3([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)}`);
console.log(`maxSubarraySum3([2, 3], 3) -> ${
	maxSubarraySum3([2, 3], 3)}`);

const timeD = performance.nodeTiming.duration;

console.log(`first sol. -> ${timeB - timeA}, sec sol. -> ${
	timeC - timeB}, third sol. -> ${timeD - timeC}`);
