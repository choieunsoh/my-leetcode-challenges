// 10008. Path to Node in DOM Tree
// https://leetcode.com/problems/path-to-node-in-dom-tree/description/
// T.C.: O(H)
// S.C.: O(H)
/**
 * @param {Node} node
 * @return {string[]}
 */
export const buildNodePath = (node) => {
  const result = [];
  if (!document.contains(node)) return result;

  dfs(node);
  result.reverse();
  return result;

  function dfs(currentNode) {
    if (!currentNode || currentNode.nodeType !== Node.ELEMENT_NODE) {
      return;
    }

    const tagName = currentNode.tagName.toLowerCase();
    result.push(tagName);
    dfs(currentNode.parentNode);
  }
};
