function isIthBitSet(num, i) {
    // Left shift 1 by i positions to create a mask
    let mask = 1 << i;
    // Perform bitwise AND with the number
    // If the i-th bit is set, the result will be non-zero
    return (num & mask) !== 0;
}

// Example usage:
let num = 13;  // Binary: 1101
let i = 2;     // Check if the 2nd bit is set
console.log(isIthBitSet(num, i));  // Output: true


