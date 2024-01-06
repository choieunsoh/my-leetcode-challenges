// 10009. Add to Sorted List
// https://leetcode.com/problems/add-to-sorted-list/description/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {Node} node
 * @param {string} text
 * @return {void}
 */
export const addToSortedList = (node, text) => {
  const newNode = document.createElement('li');
  newNode.textContent = text;

  if (!node.firstChild) {
    node.appendChild(newNode);
    return;
  }

  const childNodes = node.childNodes;
  const n = childNodes.length;
  const index = findNodeIndex();
  node.insertBefore(newNode, childNodes[index]);

  function findNodeIndex() {
    let left = 0;
    let right = n - 1;
    let index = n;
    while (left <= right) {
      const mid = (left + right) >> 1;
      const midText = childNodes[mid].textContent;
      if (midText >= text) {
        index = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return index;
  }
};
