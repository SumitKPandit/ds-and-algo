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

function maxSubarraySum(arr, number) {
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
console.log(`maxSubarraySum([100, 200, 300, 400], 2) -> ${maxSubarraySum([100, 200, 300, 400], 2)}`);
console.log(`maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) -> ${maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)}`);
console.log(`maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) -> ${maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)}`);
console.log(`maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) -> ${maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)}`);
console.log(`maxSubarraySum([2, 3], 3) -> ${maxSubarraySum([2, 3], 3)}`);