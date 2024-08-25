/**
 * @param {number[]} nums
 * @return {number}
 */
var countPairs = function(nums) {
    const isOK = (x, y) => {
        const dif = [];
        for (let i = 0; i < 7; i++) {
            if (x[i] !== y[i]) dif.push(i);
        }
        if (dif.length === 0 || dif.length === 2 || dif.length === 3) return true;
        if (dif.length !== 4) return false;
        if (x[dif[0]] === y[dif[1]] && x[dif[1]] === y[dif[0]]) return true;
        if (x[dif[0]] === y[dif[2]] && x[dif[2]] === y[dif[0]]) return true;
        if (x[dif[0]] === y[dif[3]] && x[dif[3]] === y[dif[0]]) return true;
        return false;
    }
    
    const m = {};
    for (const temp of nums) {
        const value = temp.toString().padStart(7, '0');
        const key = value.split('').sort().join('')
        m[key] = m[key] || [];
        m[key].push(value);
    }
    let result = 0;
    for (const key of Object.keys(m)) {
        const cur = m[key];
        for (let i = 0; i < cur.length; i++) {
            for (let j = i + 1; j < cur.length; j++) {
                if (isOK(cur[i], cur[j])) result++;
            }
        }
    }
    return result;

};