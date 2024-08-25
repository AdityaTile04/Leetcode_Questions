/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    if (multiplier === 1) return nums;
    const m = [1];
    const mod = 1000000007;
    const mul = (a, b) => (((a * Math.floor(b / 100000)) % mod) * 100000 + a * (b % 100000)) % mod;
    const pow = (a, b) => {
        if (b === 0) return 1;
        let r = pow(a, Math.floor(b / 2));
        r = mul(r, r);
        if (b % 2) r = mul(r, a);
        return r;
    };
    const max = Math.max(...nums);
    while (m[m.length - 1] <= max) m.push(m[m.length - 1] * multiplier);
    const f = m.map(item => []);
    for (let i = 0; i < nums.length; i++) {
        const idx = m.findIndex(item => item > nums[i]) - 1;
        f[idx].push(({ value: nums[i], index: i }));
    }
    f.pop();
    
    for (let i = 0; i < f.length - 1; i++) {
        const cur = f[i].sort((a, b) => a.value === b.value ? a.index - b.index : a.value - b.value);
        for (let j = 0; j < cur.length; j++) {
            if (k === 0) f[i + 1].push(cur[j]);
            else {
                f[i + 1].push({ value: cur[j].value * multiplier, index: cur[j].index });
                k--;
            }
        }
        if (k === 0) {
            const result = new Array(nums.length).fill(0);
            for (let j = i + 1; j < f.length; j++) {
                for (const {value, index} of f[j]) {
                    result[index] = value % mod;
                }
            }
            return result;
        }
    }

    const result = new Array(nums.length).fill(0);
    const cur = f[f.length - 1]
        .sort((a, b) => a.value === b.value ? a.index - b.index : a.value - b.value)
        .map(item => ({ value: item.value % mod, index: item.index }));
    const tf = Math.floor(k / nums.length);
    const mtf = pow(multiplier, tf);
    const mtc = mul(mtf, multiplier);
    const d = k % nums.length;
    for (let i = 0; i < nums.length; i++) {
        result[cur[i].index] = mul(cur[i].value, i < d ? mtc : mtf);
    }
    return result;
};