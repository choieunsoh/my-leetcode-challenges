// 10005. Count Leaf Nodes
// https://leetcode.com/problems/count-leaf-nodes/description/
/**
 * @param {Node} node
 * @return {number}
 */
export const countLeafNodes = (node) => {
  return dfs(node);

  function dfs(node) {
    const childNodes = node.childNodes ?? [];
    if (childNodes.length === 0) return 1;

    let count = 0;
    for (const childNode of childNodes) {
      count += dfs(childNode);
    }
    return count;
  }
};
