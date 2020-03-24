/*
    Date: 28 February 2020
    Name: Sumit Kumar Pandit
    Description: Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
    Time Complexity: O(n)
*/
function sameFrequency(num1, num2) {
    const arr1 = num1.toString(10).split('').map(Number);
    const arr2 = num2.toString(10).split('').map(Number);
    if(arr1.length != arr2.length) {
        return false;
    }
    let frequencyCounter = {};
    for(let elem of arr1) {
        if(frequencyCounter[elem] == undefined) {
            frequencyCounter[elem] = 1;
        } else {
            frequencyCounter[elem]++;
        }
    }
    for(let elem of arr2) {
        if(frequencyCounter[elem] == undefined) {
            return false;
        } else if(frequencyCounter[elem] > 1) {
            frequencyCounter[elem]--;
        } else {
            delete frequencyCounter[elem];
        }
    }
    if(Object.entries(frequencyCounter) == 0) {
        return true;
    } else {
        return false;
    }
}

// Testing
console.log(`Num1 = 182 and Num2 = 281 -> ${sameFrequency(182, 281)}`);
console.log(`Num1 = 34 and Num2 = 14 -> ${sameFrequency(34, 14)}`);
console.log(`Num1 = 3589578 and Num2 = 5879385 -> ${sameFrequency(3589578, 5879385)}`);
console.log(`Num1 = 22 and Num2 = 222 -> ${sameFrequency(22, 222)}`);