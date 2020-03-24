/*
	Date		:	4 March 2020
	Author		:	Sumit Kumar Pandit
	Description	:	Write a function called isSubsequence which takes in
					two strings and checks whether the characters in the
					first string form a subsequence of the characters in
					the second string. In other words, the function
					should check whether the characters in the first
					string appear somewhere in the second string,
					without their order changing.
	Time		:	O(N)
	Space		:	O(1)
*/

function isSubsequence(subSeq, seq) {
	let subSeqPos = 0;
	const subSeqLen = subSeq.length;
	const seqLen = seq.length;
	for(let i = 0; i < seqLen; i++) {
			if(seq[i] === subSeq[subSeqPos]) {
				subSeqPos++;
			}
			if(subSeqPos === subSeqLen) {
				return true;
			}
	}
	return false;
}

// Testing
console.log(`isSubsequence('hello', 'hello world') -> ${isSubsequence(
	'hello', 'hello world'
)}`);
console.log(`isSubsequence('sing', 'sting') -> ${isSubsequence(
	'sing', 'sting'
)}`);
console.log(`isSubsequence('abc', 'abracadabra') -> ${isSubsequence(
	'abc', 'abracadabra'
)}`);
console.log(`isSubsequence('abc', 'acb') -> ${isSubsequence(
	'abc', 'acb'
)}`);