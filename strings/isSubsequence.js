function isSubsequence(str1, str2) {
    let ptr1 = 0;
    let ptr2 = 0;
    
    while (ptr1 < str1.length && ptr2 < str2.length) {
        if (str1[ptr1] === str2[ptr2]) {
            ptr1++;
        }
        ptr2++;
    }
    
    return ptr1 === str1.length;
}

// Example usage:
let str1 = "abc";
let str2 = "ahbgdc";
console.log(isSubsequence(str1, str2));  // Output should be true

str1 = "axc";
str2 = "ahbgdc";
console.log(isSubsequence(str1, str2));  // Output should be false
