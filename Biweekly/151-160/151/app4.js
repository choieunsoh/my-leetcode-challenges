/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var permute = function (n, k) {
  const nums = Array.from({ length: n }, (_, i) => i + 1);
  const result = [];
  backtrack([], new Array(n).fill(false));
  return result[k - 1] ?? [];

  function backtrack(path, used) {
    if (path.length === n) {
      result.push([...path]);
      return;
    }

    if (result.length === k) return;

    for (let i = 0; i < n; i++) {
      if (used[i] || !isValid(path, nums[i])) continue;
      used[i] = true;
      path.push(nums[i]);
      backtrack(path, used);
      used[i] = false;
      path.pop();
    }
  }

  function isValid(path, curr) {
    if (path.length === 0) return true;
    const prev = path[path.length - 1];
    return prev % 2 !== curr % 2;
  }
};

var n = 4,
  k = 6;
var expected = [3, 4, 1, 2];
var result = permute(n, k);
console.log(result, result.join() === expected.join());

var n = 3,
  k = 2;
var expected = [3, 2, 1];
var result = permute(n, k);
console.log(result, result.join() === expected.join());

var n = 2,
  k = 4;
var expected = [];
var result = permute(n, k);
console.log(result, result.join() === expected.join());

var n = 12,
  k = 825407;
var expected = [10, 7, 4, 5, 12, 11, 8, 9, 6, 1, 2, 3];
var result = permute(n, k);
console.log(result, result.join() === expected.join());

var n = 13,
  k = 2618881;
var expected = [11, 2, 3, 12, 5, 8, 9, 10, 1, 4, 7, 6, 13];
var result = permute(n, k);
console.log(result, result.join() === expected.join());
