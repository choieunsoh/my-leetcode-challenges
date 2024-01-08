// 10017. Mutation Observer
// https://leetcode.com/problems/mutation-observer/description/
/**
 * @param {Node} node
 * @param {Function} callback
 * @return {MutationObserver}
 */
export const observeMutations = (node, callback) => {
  // Create a new MutationObserver
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      callback(mutation);
    }
  });

  // Configure options for the observer
  const config = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true, // Observe all descendants
    attributeOldValue: true, // Log old attribute values
    characterDataOldValue: true, // Log old character data values
  };

  // Observe the node with the specified configuration
  observer.observe(node, config);

  // Return the MutationObserver instance
  return observer;
};
