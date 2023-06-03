// 2649. Nested Array Generator
// https://leetcode.com/problems/nested-array-generator/
/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
  if (Array.isArray(arr)) {
    for (const num of arr) {
      yield* inorderTraversal(num);
    }
  } else {
    yield arr;
  }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */

var arr = [1, [2, 3]];
var outputs = [1, 2, 3];
var gen = inorderTraversal(arr);
for (const expected of outputs) {
  const result = gen.next().value;
  console.log(result, result === expected);
}

var arr = [[[6]], [1, 3], []];
var outputs = [6, 1, 3];
var gen = inorderTraversal(arr);
for (const expected of outputs) {
  const result = gen.next().value;
  console.log(result, result === expected);
}
