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
console.log(areAnagrams("hello", "world"));   // output: false
