/*
	Date		:	6 March 2020
	Author		:	Sumit Kumar Pandit
	Description	:	Write a function called minSubArrayLen which accepts
					two parameters - an array of positive integers and a
					positive integer.
					This function should return the minimal length of a 
					contiguous subarray of which the sum is greater than
					or equal to the integer passed to the function. If
					there isn't one, return 0 instead.
	Time		:	O(n)
	Space		:	O(1)
*/

function minSubArrayLen(arr, num) {
	let length = arr.length;
	let sum = 0;
	let count = 0;
	for ( i = 0; i< arr.length; i++)
		sum = arr[i] + sum;
	    count = count + 1;
	if (sum > = num ){
		sum = sum - arr[(counter - i)-1 ]
	    if ( sum > = num ) {
			final_counter = counter - 1 ;
			else { 
			final_counter = counter ;
			}
		}
	}
	
	// const len = arr.length;
	// let sum = 0;
	// let start = 0;
	// let end = 0;
	// let subArrMinLen = 0;
	// for(let i = 0; i < len; i++) {
		// if(sum >= num) {
			// subArrMinLen = end - start;
			// sum = sum - (arr[start]);
			// start += 1;
		// } else {
			// sum = sum + arr[i];
			// end = i;
		// }
	// }
	
}

// Testing
console.log(`minSubArrayLen([2, 3, 1, 2, 4, 3], 7) -> ${
	minSubArrayLen([2, 3, 1, 2, 4, 3], 7)}`);
console.log(`minSubArrayLen([2, 1, 6, 5, 4], 9) -> ${
	minSubArrayLen([2, 1, 6, 5, 4], 9)}`);
console.log(`minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)\
 -> ${minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)}`);
console.log(`minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) -> ${
	minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)}`);
console.log(`minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) -> ${
	minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)}`);
console.log(`minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) -> ${
	minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)}`);
console.log(`minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) -> ${
	minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)}`);