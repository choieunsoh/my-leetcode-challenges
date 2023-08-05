// 2721. Execute Asynchronous Functions in Parallel
// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel
/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
  return new Promise((resolve, reject) => {
    if (functions.length === 0) {
      resolve([]);
      return;
    }

    const results = new Array(functions.length).fill(null);

    let resolvedCount = 0;
    functions.forEach(async (el, idx) => {
      try {
        const subResult = await el();
        results[idx] = subResult;
        resolvedCount++;

        if (resolvedCount === functions.length) {
          resolve(results);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
