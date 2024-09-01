/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    let arr = [];
    let l = 0;
    if (m * n == original.length) {
        for (i = 0; i < m; i++) {
            arr[i] = [];
            for (j = 0; j < n; j++) {
                arr[i][j] = original[l++]
            }
        }
        return arr
    } else {
        return []
    }
};