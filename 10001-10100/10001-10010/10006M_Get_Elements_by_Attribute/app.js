// 10006. Get Elements by Attribute
// https://leetcode.com/problems/get-elements-by-attribute/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} attributeValue
 * @return {HTMLElement[]}
 */
export const getElementsByAttribute = (attributeValue) => {
  const result = [];
  const [attribute, value] = attributeValue.split('=');
  dfs(document.body);
  return result;

  function dfs(node) {
    if (node.nodeType === Node.ELEMENT_NODE && node.getAttribute(attribute) === value) {
      result.push(node);
    }

    for (const childNode of node.childNodes) {
      dfs(childNode);
    }
  }
};
