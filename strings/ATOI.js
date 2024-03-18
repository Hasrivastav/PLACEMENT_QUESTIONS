function Atoi(s) {
    let i = 0;
    let result = 0;
    let sign = 1;

    // Skip leading whitespaces
    while (s[i] === ' ') {
        i++;
    }

    // Check for sign
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // Convert string to integer
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = (result * 10) + (s[i] - '0');
        i++;
    }

    result = sign * result;

    // Handle overflow
    if (result > 2147483647) {
        return 2147483647;
    } else if (result < -2147483648) {
        return -2147483648;
    }

    return result;
}

console.log(Atoi("42"));  // Output: 42
console.log(Atoi("   -42"));  // Output: -42
console.log(Atoi("4193 with words"));  // Output: 4193
console.log(Atoi("words and 987"));  // Output: 0
console.log(Atoi("-91283472332"));  // Output: -2147483648