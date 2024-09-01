/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxScore = function (grid) {
    let m = grid.length;
    let M = (1 << m);
    let max = 0;
    for (let i = 0; i < m; i++) {
        grid[i] = [...new Set(grid[i])].sort((a, b) => b - a);
    }
    for (let temp of grid) {
        for (let a of temp) max = Math.max(max, a);
    }
    let dp = Array.from({ length: M + 1 }).map(_ => new Array(max + 1).fill(-1));
    let dfs = (index, prev) => {
        if (index === 0) return 0;
        if (dp[index][prev] !== -1) return dp[index][prev];

        let res = 0;
        for (let i = 0; i < m; i++) {
            if ((index >> i) & 1) {
                let cur = grid[i];
                for (let j = 0; j < cur.length && cur[j] > prev; j++) {
                    res = Math.max(res, cur[j] + dfs(index ^ (1 << i), cur[j]));
                }
            }
        }
        dp[index][prev] = res;
        return res;
    }


    return dfs(M - 1, 0);

};