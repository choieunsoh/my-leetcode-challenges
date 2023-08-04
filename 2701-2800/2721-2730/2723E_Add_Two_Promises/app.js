// 2723. Add Two Promises
// https://leetcode.com/problems/add-two-promises
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  const results = await Promise.all([promise1, promise2]);
  return results.reduce((sum, result) => sum + result, 0);
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
