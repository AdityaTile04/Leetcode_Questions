/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
    let tsum = 0;
    for (let x of skill) tsum += x
    tsum = (tsum / skill.length) * 2

    let mp = new Map();
    for (let x of skill) {
        mp.set(x, (mp.get(x) || 0) + 1)
    }

    let chem = 0;
    for (let [key, val] of mp) {
        if (val !== mp.get(tsum - key)) return - 1
        if (key === tsum - key) chem += (key * (tsum - key)) * (val / 2)
        else chem += (key * (tsum - key)) * val
        mp.delete(key)
        mp.delete(tsum - key)
    }

    return chem;
};