// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.
// ChatGPT
// You can solve this problem using string manipulation in JavaScript. Here's a function that accomplishes this:

// javascript
// Copy code


function strStr(haystack, needle) {
    if (needle === "") return 0; // Edge case: empty needle
    
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i; // Found the needle at index i
        }
    }
    
    return -1; // Needle not found
}

// Example usage:
console.log(strStr("sadbutsad", "sad"));  // Output: 0
console.log(strStr("leetcode", "leeto"));  



// this code can also be done using rabin karlp algorithm 
