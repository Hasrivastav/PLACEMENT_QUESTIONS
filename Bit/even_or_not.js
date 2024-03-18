function isOdd(num) {
    // Bitwise AND operation with 1
    // If the number is odd, its least significant bit will be 1
    // If the number is even, its least significant bit will be 0
    return (num & 1) !== 0;
}