/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
    const n = arr.length;
    const pre = new Array(n);
    pre[0] = arr[0];

    for (let i = 1; i < n; i++) {
        pre[i] = pre[i - 1] ^ arr[i];
    }

    const res = [];

    for (const [left, right] of queries) {
        if (left === 0) {
            res.push(pre[right]);
        } else {
            res.push(pre[right] ^ pre[left - 1])
        }
    }

    return res;
};