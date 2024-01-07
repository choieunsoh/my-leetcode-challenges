// 10012. DOM Content Loaded
// https://leetcode.com/problems/dom-content-loaded/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {Function} callback
 * @return {void}
 */
export const onDomContentLoaded = (callback) => {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    callback();
    return;
  }

  document.addEventListener('DOMContentLoaded', callback);
};
