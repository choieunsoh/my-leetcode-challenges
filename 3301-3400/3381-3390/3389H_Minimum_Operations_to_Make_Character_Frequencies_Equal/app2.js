// 3389. Minimum Operations to Make Character Frequencies Equal
// https://leetcode.com/problems/minimum-operations-to-make-character-frequencies-equal/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var makeStringGood = function (s) {
  const count = new Array(26).fill(0);
  for (const char of s) {
    count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  const memo = new Map();
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i <= Math.max(...count); i++) {
    result = Math.min(result, f(0, i, 0));
  }
  return result;

  function f(i, target, deleted) {
    const key = `${i}-${target}-${deleted}`;
    if (memo.has(key)) return memo.get(key);
    if (i === 26) return 0;

    const x = count[i];
    let result;
    if (x === target || x === 0) {
      result = f(i + 1, target, 0);
    } else if (x > target) {
      result = x - target + f(i + 1, target, x - target);
    } else {
      const need = target - x;
      const insert = f(i + 1, target, 0) + need;
      const deleteOp = f(i + 1, target, x) + x;
      const change = f(i + 1, target, 0) + (need - Math.min(need, deleted));
      result = Math.min(insert, deleteOp, change);
    }

    memo.set(key, result);
    return result;
  }
};

var s = 'acab';
var expected = 1;
var result = makeStringGood(s);
console.log(result, result === expected);

var s = 'wddw';
var expected = 0;
var result = makeStringGood(s);
console.log(result, result === expected);
