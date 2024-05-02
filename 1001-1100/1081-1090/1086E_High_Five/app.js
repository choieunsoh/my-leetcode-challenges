// 1086. High Five
// https://leetcode.com/problems/high-five/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function (items) {
  const result = [];
  const n = items.length;
  items.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));

  let i = 0;
  while (i < n) {
    let count = 0;
    let totalScore = 0;
    const [id] = items[i];
    while (i < n && count < 5) {
      totalScore += items[i][1];
      count++;
      i++;
    }

    result.push([id, (totalScore / 5) | 0]);

    while (i < n && items[i][0] === id) {
      i++;
    }
  }

  return result;
};

var items = [
  [1, 91],
  [1, 92],
  [2, 93],
  [2, 97],
  [1, 60],
  [2, 77],
  [1, 65],
  [1, 87],
  [1, 100],
  [2, 100],
  [2, 76],
];
var expected = [
  [1, 87],
  [2, 88],
];
var result = highFive(items);
console.log(result, result.join() === expected.join());

var items = [
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
];
var expected = [
  [1, 100],
  [7, 100],
];
var result = highFive(items);
console.log(result, result.join() === expected.join());
