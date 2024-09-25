/**
 * @param {string[]} words
 * @return {number[]}
 */

class TrieNode {
    constructor() {
        this.ch = {};
        this.score = 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }
    insert(word) {
        let cur = this.root;
        for (let c of word) {
            if (!cur.ch.hasOwnProperty(c)) {
                cur.ch[c] = new TrieNode();
            }
            cur = cur.ch[c];
            cur.score += 1
        }
    }
    get_score(word) {
        let cur = this.root;
        let tot = 0;
        for (let c of word) {
            if (!cur.ch.hasOwnProperty(c)) {
                break;
            }
            cur = cur.ch[c];
            tot += cur.score;
        }
        return tot;
    }
}

var sumPrefixScores = function (words) {
    let s = words;
    let tree = new Trie();
    let ans = [];
    for (let w of s) {
        tree.insert(w)
    }
    for (let w of words) {
        ans.push(tree.get_score(w))
    }

    return ans;
};