/*
	Date		:	4 March 2020
	Author		:	Sumit Kumar Pandit
	Description	:	Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any
					duplicates among the arguments passed in. You can solve this using the frequency counter pattern or the multiple pointer pattern.
	Solution 1
	Time		: O(n)
	Space		: O(n)
*/
function areThereDuplicates1(...args) {
	const freqCounter = {};
	for(let elem of args) {
		if(freqCounter[elem] === undefined) {
			freqCounter[elem] = 1;
		} else {
			freqCounter[elem]++;
		}
	}
	for(let elem in freqCounter) {
		if(freqCounter[elem] > 1) {
			return true;
		}
	}
	return false;
}

/*
	Solution 2
	Time		: O(nlogn)
	Space		: O(1)
*/
function areThereDuplicates2(...args) {
	args.sort();
	const length = args.length;
	for(let i = 0; i < length - 1; i++) {
		if(args[i] === args[i + 1]) {
			return true;
		}
	}
	return false;
}

// Testing
const {performance} = require('perf_hooks');
const timeA = performance.nodeTiming.duration;
console.log(`areThereDuplicates1(1, 2, 3) -> ${areThereDuplicates1(1, 2, 3)}`);
console.log(`areThereDuplicates1(1, 2, 2) -> ${areThereDuplicates1(1, 2, 2)}`);
console.log(`areThereDuplicates1('a', 'b', 'c', 'a') -> ${areThereDuplicates1('a', 'b', 'c', 'a')}`);
const timeB = performance.nodeTiming.duration;
console.log(`areThereDuplicates2(1, 2, 3) -> ${areThereDuplicates2(1, 2, 3)}`);
console.log(`areThereDuplicates2(1, 2, 2) -> ${areThereDuplicates2(1, 2, 2)}`);
console.log(`areThereDuplicates2('a', 'b', 'c', 'a') -> ${areThereDuplicates2('a', 'b', 'c', 'a')}`);
const timeC = performance.nodeTiming.duration;
console.log(`Time taken by areThereDuplicates1 -> ${timeB - timeA}`);
console.log(`Time taken by areThereDuplicates2 -> ${timeC - timeB}`);