// 10029. Get Next Right Sibling
// https://leetcode.com/problems/get-next-right-sibling/description/
// T.C.: O(D)
// S.C.: O(D)
/**
 * @param {HTMLElement|null} targetNode
 * @return {HTMLElement|null}
 */
export const getNextRightSibling = (targetNode) => {
  if (!targetNode || !targetNode.parentElement) return null;
  if (targetNode.nextElementSibling) return targetNode.nextElementSibling;

  let depth = 1;
  let parentNode = targetNode.parentElement;
  while (parentNode) {
    if (parentNode.nextElementSibling) {
      const sibling = getFirstChildAtDepth(parentNode.nextElementSibling, depth);
      if (sibling) return sibling;
    }
    depth++;
    parentNode = parentNode.parentElement;
  }
  return null;

  function getFirstChildAtDepth(node, depth) {
    if (!node || depth < 0) return null;
    if (depth === 0) return node;

    for (const child of node.children) {
      const found = getFirstChildAtDepth(child, depth - 1);
      if (found) return found;
    }
    return null;
  }
};
