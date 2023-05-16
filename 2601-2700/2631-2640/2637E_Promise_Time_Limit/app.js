// 2637. Promise Time Limit
// https://leetcode.com/problems/promise-time-limit/
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  let timeout = null;
  return async function (...args) {
    const rejectPromise = new Promise((_, reject) => {
      timeout = setTimeout(() => reject('Time Limit Exceeded'), t);
    });
    const resolvePromise = fn.apply(this, args);
    try {
      return await Promise.race([resolvePromise, rejectPromise]);
    } finally {
      clearTimeout(timeout);
      timeout = null;
    }
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
