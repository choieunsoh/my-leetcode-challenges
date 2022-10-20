// https://leetcode.com/problems/clone-graph/
// 133. Clone Graph
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */
class GraphNode {
  val: number;
  neighbors: GraphNode[];
  constructor(val?: number, neighbors?: GraphNode[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

var cloneGraph_TS = function (node: GraphNode | null): GraphNode | null {
  const map = new Map<number, GraphNode>();

  function clone(node: GraphNode | null): GraphNode | null {
    if (!node) return null;
    if (!map.has(node.val)) {
      const newNode = new GraphNode(node.val);
      map.set(node.val, newNode);
      for (let i = 0; i < node.neighbors.length; i++) {
        const newChildNode = clone(node.neighbors[i]);
        if (newChildNode) newNode.neighbors.push(newChildNode);
      }
    }
    return map.get(node.val) ?? null;
  }

  return clone(node);
};
