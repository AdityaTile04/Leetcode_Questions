/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function(num1, num2, num3) {
    // Step 1: Pad each number to ensure they are four digits long
    let str1 = num1.toString().padStart(4, '0');
    let str2 = num2.toString().padStart(4, '0');
    let str3 = num3.toString().padStart(4, '0');
    
    // Step 2: Initialize the key
    let key = '';
    
    // Step 3: Find the minimum digit for each position and build the key
    for (let i = 0; i < 4; i++) {
        let minDigit = Math.min(str1[i], str2[i], str3[i]);
        key += minDigit;
    }
    
    // Step 4: Remove leading zeros from the key
    return key.replace(/^0+/, '') || '0';
};

// Example test cases
console.log(generateKey(1, 10, 1000)); // Output: "0"
console.log(generateKey(987, 879, 798)); // Output: "777"
console.log(generateKey(1, 2, 3)); // Output: "1"
