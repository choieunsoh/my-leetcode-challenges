// 279. Perfect Squares
// https://leetcode.com/problems/perfect-squares/
// T.C.: O(sqrt(n))
// S.C.: O(sqrt(n) ^ h)
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const nums = [];
  let num = 1;
  while (num ** 2 <= n) {
    nums.push(num ** 2);
    num++;
  }

  let count = 1;
  const visited = new Set();
  const queue = [n];
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const cur = queue.shift();
      for (let j = 0; j < nums.length; j++) {
        const next = cur - nums[j];
        if (next === 0) {
          return count;
        }
        if (next < 0) {
          break;
        }
        if (next > 0 && !visited.has(next)) {
          queue.push(next);
          visited.add(next);
        }
      }
    }
    count++;
  }

  return count;
};

var n = 12,
  expected = 3;
var result = numSquares(n);
console.log(result, result === expected);

var n = 13,
  expected = 2;
var result = numSquares(n);
console.log(result, result === expected);

for (let n = 1; n <= 100; n++) {
  console.log(n, numSquares(n));
}
