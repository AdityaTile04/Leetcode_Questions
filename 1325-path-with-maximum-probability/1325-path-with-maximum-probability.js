/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start_node, end_node) {
    let maxSuccessProb = new Array(n).fill(0);
    maxSuccessProb[start_node] = 1;

    for (let i = 0; i <= n; i++) {
        let changed = false;
        for (let j = 0; j < edges.length; j++) {
            let edge1 = edges[j][0]
            let edge2 = edges[j][1]
            let prob = succProb[j]

            if (maxSuccessProb[edge1] * prob > maxSuccessProb[edge2]) {
                maxSuccessProb[edge2] = maxSuccessProb[edge1] * prob
                changed = true
            }

            if (maxSuccessProb[edge2] * prob > maxSuccessProb[edge1]) {
                maxSuccessProb[edge1] = maxSuccessProb[edge2] * prob
                changed = true
            }
        }
        if (!changed) break
    }

    return maxSuccessProb[end_node]
};

