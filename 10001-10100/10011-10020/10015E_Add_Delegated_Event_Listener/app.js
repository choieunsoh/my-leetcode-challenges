// 10015. Add Delegated Event Listener
// https://leetcode.com/problems/add-delegated-event-listener/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @this {HTMLElement}
 * @param {string} eventName
 * @param {string} cssSelector
 * @param {Function} callback
 * @return {void}
 */
export function addDelegatedEventListener(eventName, cssSelector, callback) {
  function handleEvent(event) {
    const target = event.target;
    if (target.matches(cssSelector)) {
      callback.call(target, target);
    }
  }

  this.addEventListener(eventName, handleEvent);
}
