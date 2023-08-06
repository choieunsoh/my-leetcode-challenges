// 2813. Maximum Elegance of a K-Length Subsequence
// https://leetcode.com/problems/maximum-elegance-of-a-k-length-subsequence/
/**
 * @param {number[][]} items
 * @param {number} k
 * @return {number}
 */
var findMaximumElegance = function (items, k) {
  items.sort((a, b) => b[0] - a[0]);
  let result = 0;
  let curr = 0;
  const seen = new Set();
  const dup = [];
  for (let i = 0; i < items.length; i++) {
    const [profit, category] = items[i];
    if (i < k) {
      if (seen.has(category)) {
        dup.push(profit);
      }
      curr += profit;
    } else if (!seen.has(category)) {
      if (dup.length === 0) break;
      curr += profit - dup.pop();
    }
    seen.add(category);
    result = Math.max(result, curr + seen.size ** 2);
  }
  return result;
};

var items = [
    [3, 2],
    [5, 1],
    [10, 1],
  ],
  k = 2;
var expected = 17;
var result = findMaximumElegance(items, k);
console.log(result, result === expected);

var items = [
    [3, 1],
    [3, 1],
    [2, 2],
    [5, 3],
  ],
  k = 3;
var expected = 19;
var result = findMaximumElegance(items, k);
console.log(result, result === expected);

var items = [
    [1, 1],
    [2, 1],
    [3, 1],
  ],
  k = 3;
var expected = 7;
var result = findMaximumElegance(items, k);
console.log(result, result === expected);
