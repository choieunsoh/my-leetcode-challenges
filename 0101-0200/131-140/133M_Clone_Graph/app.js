// https://leetcode.com/problems/clone-graph/
// 133. Clone Graph
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const map = new Map();

  function cloneNode(node) {
    if (!node) return null;

    if (!map.has(node.val)) {
      const newNode = new Node(node.val);
      map.set(node.val, newNode);
      newNode.neighbors = node.neighbors.map(cloneNode);
    }

    return map.get(node.val);
  }

  return cloneNode(node);
};
