// 2636. Promise Pool
// https://leetcode.com/problems/promise-pool/
/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function (functions, n) {
  let functionIndex = 0;
  const promises = Array.from({ length: n }, nextFunction);
  await Promise.all(promises);

  async function nextFunction() {
    if (functionIndex === functions.length) return;
    const fn = functions[functionIndex++];
    await fn();
    await nextFunction();
  }
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
