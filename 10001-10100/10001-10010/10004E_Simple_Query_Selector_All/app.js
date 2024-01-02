// 10004. Simple Query Selector All
// https://leetcode.com/problems/simple-query-selector-all/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} selector
 * @return {HTMLElement[]}
 */
export const querySelectorAll = (selector) => {
  const firstChar = selector.charAt(0);
  const name = selector.substring(1);
  if (firstChar === '#') {
    return [document.getElementById(name)];
  } else if (firstChar === '.') {
    return document.getElementsByClassName(name);
  } else {
    return document.getElementsByTagName(selector);
  }
};
