/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let res = 0;
    let hash = new Map();
    for (let i of allowed) {
        hash.set(i, 1);
    }

    for (let word of words) {
        let check = true;

        for (let s of word) {
            if (!hash.has(s)) {
                check = false;
                break;
            }
        }
        if (check) res++;
    }
    return res;
};