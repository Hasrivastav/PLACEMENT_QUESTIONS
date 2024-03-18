function isPowerOfTwo(num) {
    // A power of 2 has only one bit set to 1 in its binary representation.
    // If we subtract 1 from a power of 2, all bits to the right of the only set bit become 1.
    // For example: 8 (1000) - 1 = 7 (0111)
    // Performing a bitwise AND between the original number and (number - 1) should result in 0.
    // 8 & 7 = 0
    return num > 0 && (num & (num - 1)) === 0;
}
   