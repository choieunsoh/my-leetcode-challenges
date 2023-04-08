// 133. Clone Graph
// https://leetcode.com/problems/clone-graph/
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
  map.set(node.val, new Node(node.val));
  let queue = [node];
  while (queue.length) {
    const newQueue = [];
    for (let i = 0; i < queue.length; i++) {
      const current = queue[i];
      if (!current.neighbors) continue;
      for (const neighbor of current.neighbors) {
        if (!map.has(neighbor.val)) {
          map.set(neighbor.val, new Node(neighbor.val));
          newQueue.push(neighbor);
        }
        map.get(current.val).neighbors.push(map.get(neighbor.val));
      }
    }
    queue = newQueue;
  }

  return map.get(node);
};
