// 2049. Count Nodes With the Highest Score
// https://leetcode.com/problems/count-nodes-with-the-highest-score/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function (parents) {
  const n = parents.length;
  const scores = new Map();
  const nodes = Array.from({ length: n }, (_, i) => new Node(i));
  for (let i = 1; i < n; i++) {
    const node = nodes[i];
    const parent = nodes[parents[i]];
    if (!parent.left) {
      parent.left = node;
    } else {
      parent.right = node;
    }
  }

  let maxScore = 0;
  dfs(nodes[0]);
  return scores.get(maxScore);

  function dfs(node) {
    if (!node) return 0;
    const leftNodes = dfs(node.left);
    const rightNodes = dfs(node.right);
    const totalNodes = leftNodes + rightNodes + 1;
    const restNodes = n - totalNodes;
    const score = (leftNodes || 1) * (rightNodes || 1) * (restNodes || 1);
    scores.set(score, (scores.get(score) || 0) + 1);
    maxScore = Math.max(maxScore, score);
    return totalNodes;
  }
};

class Node {
  left = null;
  right = null;

  constructor(val) {
    this.val = val;
  }
}

var parents = [-1, 2, 0, 2, 0];
var expected = 3;
var result = countHighestScoreNodes(parents);
console.log(result, result === expected);

var parents = [-1, 2, 0];
var expected = 2;
var result = countHighestScoreNodes(parents);
console.log(result, result === expected);

var parents = [-1, 3, 3, 5, 7, 6, 0, 0];
var expected = 2;
var result = countHighestScoreNodes(parents);
console.log(result, result === expected);
