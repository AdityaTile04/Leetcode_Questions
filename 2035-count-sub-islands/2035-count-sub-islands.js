/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
    const m = grid1.length;
    const n = grid1[0].length;

    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= m || j >= n || grid2[i][j] === 0) {
            return true;
        }

        grid2[i][j] = 0;

        let isSubIsland = true;
        if (grid1[i][j] === 0) {
            isSubIsland = false;
        }

        const up = dfs(i - 1, j);
        const down = dfs(i + 1, j);
        const left = dfs(i, j - 1);
        const right = dfs(i, j + 1);

        return isSubIsland && up && down && left && right;
    };

    let subIslandCount = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid2[i][j] === 1) {
                if (dfs(i, j)) {
                    subIslandCount++;
                }
            }
        }
    }

    return subIslandCount;
};