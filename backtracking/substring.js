function findSubstrings(str) {
    const result = [];

    function backtrack(start, currentSubstring) {
        result.push(currentSubstring);

        for (let i = start + 1; i < str.length; i++) {
            currentSubstring += str[i];
            backtrack(i, currentSubstring);
            currentSubstring = currentSubstring.slice(0, -1); // Backtrack by removing the last character
        }
    }

    for (let i = 0; i < str.length; i++) {
        backtrack(i, str[i]);
    }

    return result;
}

console.log(findSubstrings("abc"));