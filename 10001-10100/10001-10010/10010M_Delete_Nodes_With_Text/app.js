// 10010. Delete Nodes With Text
// https://leetcode.com/problems/delete-nodes-with-text/description/
// T.C.: O(n)
// S.C.: O(D)
/**
 * @param {Node} node
 * @param {string} searchText
 * @return {void}
 */
export const deleteNodesWithText = (node, searchText) => {
  dfs(node, searchText);

  function dfs(node, searchText) {
    for (let i = node.childNodes.length - 1; i >= 0; i--) {
      const childNode = node.childNodes[i];
      if (childNode.nodeType === Node.TEXT_NODE && childNode.textContent.includes(searchText)) {
        childNode.parentNode.remove();
      }
      if (childNode.nodeType === Node.ELEMENT_NODE) {
        dfs(childNode, searchText);
      }
    }
  }
};
