/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
    let allSum = 0;

    for (let val of chalk)
        allSum += val;

    let mod = k % allSum;
    let n = chalk.length;

    for (let i = 0; i < n; i++) {
        if (chalk[i] > mod) {
            return i;
        }

        mod -= chalk[i];

    }
    return mod;
};