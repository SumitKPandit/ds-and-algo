/*
	Date		:	4 March 2020
	Author		:	Sumit Kumar Pandit
	Description	:	Write a function called averagePair. Given a sorted 
					array of integers and a target average, determine if
					there is a pair of values in the array where the
					average of the pair equals the target average. There
					may be more than one pair that matches the average
					target.
	Time		: 	O(N)
	Space		:	O(1)
*/

function averagePair(number, target) {
	if(number.length === 0) {
		return false;
	}
	let low = 0;
	let high = number.length - 1;
	while(low != high) {
		let sum = number[low] + number[high];
		if(sum > (target * 2)) {
			high--;
		} else if(sum < (target * 2)) {
			low++;
		} else {
			return true;
		}
	}
	return false;
}

// Testing
console.log(
	`averagePair([1, 2, 3], 2.5) -> ${averagePair([1, 2, 3], 2.5)}`
);
console.log(
	`averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) -> ${averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)}`
);
console.log(
	`averagePair([-1, 0, 3, 4, 5, 6], 4.1) -> ${averagePair([-1, 0, 3, 4, 5, 6], 4.1)}`
);
console.log(`averagePair([], 4) -> ${averagePair([], 4)}`);