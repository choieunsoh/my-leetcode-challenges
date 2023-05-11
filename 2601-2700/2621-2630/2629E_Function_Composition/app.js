// 2629. Function Composition
// https://leetcode.com/problems/function-composition/
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    if (functions.length === 0) return x;
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i].call(this, x);
    }
    return x;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
const fn = compose([(x) => x + 1, (x) => 2 * x]);
fn(4); // 9
