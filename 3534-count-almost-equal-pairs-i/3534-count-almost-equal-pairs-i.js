/**
 * @param {number[]} nums
 * @return {number}
 */
var countPairs = function(nums) {
    let n = nums.length;
    let ans = 0;
    
    // Loop through each pair (i, j) where i < j
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isAlmostEqual(nums[i], nums[j])) {
                ans++;
            }
        }
    }
    
    return ans;
};

/**
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
function isAlmostEqual(x, y) {
    let s1 = x.toString();
    let s2 = y.toString();
    
    // Adjust lengths by padding with leading zeros
    while (s1.length < s2.length) {
        s1 = "0" + s1;
    }
    while (s2.length < s1.length) {
        s2 = "0" + s2;
    }

    let diffCount = 0;
    let diffIndex = [];
    
    // Compare characters of both numbers
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diffCount++;
            diffIndex.push(i);
            if (diffCount > 2) {
                return false;  // More than 2 differences, not almost equal
            }
        }
    }
    
    // If there are no differences, they are equal
    if (diffCount === 0) {
        return true;
    }
    
    // If there are exactly 2 differences, check if swapping makes them equal
    if (diffCount === 2) {
        let s1Array = s1.split('');
        let idx1 = diffIndex[0];
        let idx2 = diffIndex[1];

        // Swap characters
        let temp = s1Array[idx1];
        s1Array[idx1] = s1Array[idx2];
        s1Array[idx2] = temp;

        return s1Array.join('') === s2;
    }
    
    return false;
}
