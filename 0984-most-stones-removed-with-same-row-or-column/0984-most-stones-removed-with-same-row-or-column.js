/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    const parent = {};

    const find = (x) => {
        if(parent[x] === undefined) {
            parent[x] = x;
        }
        if(parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    const union = (x,y) => {
        const rootX = find(x);
        const rootY = find(y);
        if(rootX !== rootY) {
            parent[rootX] = rootY;
        }
    }

    for(const [x,y] of stones) {
        union(x, ~y);
    }

    const uniqueRoots = new Set();
    for(const [x,y] of stones) {
        uniqueRoots.add(find(x));
    }

    return stones.length - uniqueRoots.size;
};