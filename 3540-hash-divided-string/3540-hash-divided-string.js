/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function (s, k) {

    let result = '';


    let numSubstrings = s.length / k;


    for (let i = 0; i < numSubstrings; i++) {

        let substring = s.substring(i * k, (i + 1) * k);


        let sum = 0;
        for (let char of substring) {
            sum += char.charCodeAt(0) - 'a'.charCodeAt(0);
        }


        let hashedChar = sum % 26;


        let char = String.fromCharCode('a'.charCodeAt(0) + hashedChar);

        result += char;
    }


    return result;
};


console.log(stringHash("abcd", 2));
console.log(stringHash("mxz", 3));  
