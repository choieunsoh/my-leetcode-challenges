// 2676. Throttle
// https://leetcode.com/problems/throttle/
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function (fn, t) {
  let shouldWait = false;
  let waitingArgs = null;

  return function (...args) {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    fn.apply(this, args);
    shouldWait = true;
    setTimeout(timeout, t);
  };

  function timeout() {
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      fn.apply(this, waitingArgs);
      waitingArgs = null;
      setTimeout(timeout, t);
    }
  }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
