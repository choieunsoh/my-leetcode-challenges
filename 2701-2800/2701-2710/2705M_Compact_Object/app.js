// 2705. Compact Object
// https://leetcode.com/problems/compact-object
/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function (obj) {
  function dfs(obj) {
    if (!obj) return false;
    if (typeof obj !== 'object') return obj;

    if (Array.isArray(obj)) {
      const newArr = [];
      for (let i = 0; i < obj.length; i++) {
        const curr = obj[i];
        const subRes = dfs(curr);

        if (subRes) {
          newArr.push(subRes);
        }
      }

      return newArr;
    }

    const newObj = {};
    for (const key in obj) {
      const subRes = dfs(obj[key]);
      if (subRes) {
        newObj[key] = subRes;
      }
    }

    return newObj;
  }

  return dfs(obj);
};

var obj = [null, 0, false, 1];
var expected = [1];
var result = compactObject(obj);
console.log(result, result.join() === expected.join());

var obj = { a: null, b: [false, 1] };
var expected = { b: [1] };
var result = compactObject(obj);
console.log(result, result.join() === expected.join());

var obj = [null, 0, 5, [0], [false, 16]];
var expected = [5, [], [16]];
var result = compactObject(obj);
console.log(result, result.join() === expected.join());
