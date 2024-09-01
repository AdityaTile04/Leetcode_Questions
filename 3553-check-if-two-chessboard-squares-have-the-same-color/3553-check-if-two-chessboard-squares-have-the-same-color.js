/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function(coordinate1, coordinate2) {
    // Convert column letters to numbers and rows to integers
    let col1 = coordinate1.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    let row1 = parseInt(coordinate1[1]);
    
    let col2 = coordinate2.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    let row2 = parseInt(coordinate2[1]);
    
    // Determine color by checking if the sum of row and column indices is even
    let color1 = (col1 + row1) % 2;
    let color2 = (col2 + row2) % 2;
    
    // Return true if both squares have the same color
    return color1 === color2;
};

// Example usage:
console.log(checkTwoChessboards("a1", "c3")); // Output: true
console.log(checkTwoChessboards("a1", "h3")); // Output: false
