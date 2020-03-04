/*  
    Date: 24 February 2020
    Name: Sumit Kumar Pandit
    Description: Given two strings, write a function to determine if the string is an anagram of the first. An anagram is a word, phrase, or
    name formed by rearranging the letters of another, such as cinema, formed from iceman.
    You may assume the string contains only lowercase alphabets.
    Time Complexity - O(n)
*/

function validAnagram(str1, str2) {
    if(str1.length != str2.length) {
        return false;
    }
    let freqObj = {};
    for(let char of str1) {
        if(freqObj[char] == undefined) {
            freqObj[char] = 1;
        } else {
            freqObj[char]++;
        }
    }
    for(let char of str2) {
        if(freqObj[char] == undefined) {
            return false;
        } else if(freqObj[char] == 1) {
            delete freqObj[char];
        } else {
            freqObj[char]--;
        }
    }
    if(Object.entries(freqObj) == 0) {
        return true;
    } else {
        return false;
    }
}

// Testing
console.log(`String 1 = '' and String 2 = '' -> ${validAnagram('', '')}`);
console.log(`String 1 = 'aaz' and String 2 = 'zza' -> ${validAnagram('aaz', 'zza')}`);
console.log(`String 1 = 'anagram' and String 2 = 'nagaram' -> ${validAnagram('anagram', 'nagaram')}`);
console.log(`String 1 = 'rat' and String 2 = 'car' -> ${validAnagram('rat', 'car')}`);
console.log(`String 1 = 'awesome' and String 2 = 'awesom' -> ${validAnagram('awesome', 'awesom')}`);
console.log(`String 1 = 'amanaplanacanalpanama' and String 2 = 'acanalmanplanpamana' -> ${validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')}`);
console.log(`String 1 = 'qwerty' and String 2 = 'qeywrt' -> ${validAnagram('qwerty', 'qeywrt')}`);
console.log(`String 1 = 'texttwisttime' and String 2 = 'timetwisttext' -> ${validAnagram('texttwisttime', 'timetwisttext')}`);
