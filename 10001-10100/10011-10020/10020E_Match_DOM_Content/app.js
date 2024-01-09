// 10020. Match DOM Content
// https://leetcode.com/problems/match-dom-content/description/

export const matchDomContent = (node) => {
  // Initialize the text content of the node to match the current value of the data-content attribute
  node.textContent = node.getAttribute('data-content');
  const observer = new MutationObserver((mutations) => {
    // Since we're using `attributeFilter`, we know that any mutation here is because `data-content` has changed
    node.textContent = node.getAttribute('data-content');
  });
  // Start observing the node for changes to the data-content attribute
  observer.observe(node, { attributes: true, attributeFilter: ['data-content'] });
};
