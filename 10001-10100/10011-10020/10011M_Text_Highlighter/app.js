// 10011. Text Highlighter
// https://leetcode.com/problems/text-highlighter/description/
// T.C.: O(n)
// S.C.: O(n)
/*
 * @param {HTMLElement} node
 * @param {string} text
 * @return {void}
 */
export const highlightText = (node, text) => {
  if (!text) return;

  const treeWalker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, (node) =>
    node.textContent.toLowerCase().includes(text.toLowerCase())
  );

  const toUpdate = new Set();
  while ((node = treeWalker.nextNode())) {
    toUpdate.add(node.parentNode);
  }

  for (const node of toUpdate) {
    node.innerHTML = node.innerHTML.replace(new RegExp(`(${text})`, 'gi'), '<mark>$1</mark>');
  }
};
