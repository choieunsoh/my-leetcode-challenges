// 10001. Create DOM Node
// https://leetcode.com/problems/create-dom-node/description/
/**
 * @return {HTMLDivElement}
 */
export const createDomNode = () => {
  const div = document.createElement('div');
  div.textContent = 'Hello World';
  return div;
};
