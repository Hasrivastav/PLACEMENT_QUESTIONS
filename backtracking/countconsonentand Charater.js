function countVowelsAndConsonants(str, vowels = 'aeiouAEIOU', consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ') {
    // Base case: if the string is empty, return an object with both counts as 0
    if (str === '') {
        return { vowels: 0, consonants: 0 };
    }

    // Get the first character of the string
    const firstChar = str.charAt(0);

    // Check if the first character is a vowel or a consonant
    if (vowels.includes(firstChar)) {
        // If it's a vowel, recursively count vowels and consonants in the remaining substring
        const counts = countVowelsAndConsonants(str.slice(1), vowels, consonants);
        counts.vowels++;
        return counts;
    } else if (consonants.includes(firstChar)) {
        // If it's a consonant, recursively count vowels and consonants in the remaining substring
        const counts = countVowelsAndConsonants(str.slice(1), vowels, consonants);
        counts.consonants++;
        return counts;
    } else {
        // If it's neither a vowel nor a consonant, ignore it and recursively count in the remaining substring
        return countVowelsAndConsonants(str.slice(1), vowels, consonants);
    }
}

// Example usage:
const str = "Hello";
const counts = countVowelsAndConsonants(str);
console.log("Vowels:", counts.vowels);
console.log("Consonants:", counts.consonants);