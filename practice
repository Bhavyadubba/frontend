function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); //output:olleh

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("racecar")); // output: true
console.log(isPalindrome("hello"));   // output: false

function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([3, 1, 4, 1, 5, 9])); // output: 9

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); //output: [1, 2, 3, 4, 5]

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

console.log(factorial(5)); // output: 120

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;

    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(areAnagrams("listen", "silent")); // output: true


function secondLargest(arr) {
    if (arr.length < 2) return null; 

    let uniqueArr = [...new Set(arr)]; 
    if (uniqueArr.length < 2) return null;

    uniqueArr.sort((a, b) => b - a); 
    return uniqueArr[1];
}

console.log(secondLargest([10, 20, 4, 45, 99])); //output: 45

function findMissingNumber(arr) {
    let n = arr.length + 1; 
    let expectedSum = (n * (n + 1)) / 2; 
    let actualSum = arr.reduce((sum, num) => sum + num, 0); 
    
    return expectedSum - actualSum; 
}

console.log(findMissingNumber([1, 2, 4, 5])); //  output: 3


function countOccurrences(str) {
    let count = {}; // 

    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }

    return count;
}

console.log(countOccurrences("hello")); // output: { h: 1, e: 1, l: 2, o: 1 }


function firstNonRepeatingChar(str) {
    let count = {}; 

   
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }

   
    for (let char of str) {
        if (count[char] === 1) {
            return char;
        }
    }

    return null; 
}

function firstNonRepeatingChar(str) {
    let count = {}; 

    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }

   
    for (let char of str) {
        if (count[char] === 1) {
            return char; 
        }
    }

    return null; 
}

console.log(firstNonRepeatingChar("aabbcce")); // output: "e"

function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }


    while (i < arr1.length) merged.push(arr1[i++]);
    while (j < arr2.length) merged.push(arr2[j++]);

    return merged;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // output: [1, 2, 3, 4, 5, 6]


function arrayIntersection(arr1, arr2) {
    let set1 = new Set(arr1);
    return arr2.filter(num => set1.has(num)); 
}

console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); // output: [2, 3]


//output Based
console.log(1 + "2" + "2"); //output:122
console.log(1 + +"2" + "2"); //output:32
console.log(1 + -"1" + "2"); //output:02
console.log(+"1" + "1" + "2"); //output: 112
console.log("A" - "B" + "2"); //output: NaN2
console.log("A" - "B" + 2); //output: NaN

console.log(0.1 + 0.2 === 0.3); //output: false

let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); //output: 456

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c; 
        };
    };
}

console.log(sum(2)(3)(4)); // output: 9

console.log(typeof NaN); //output: number

