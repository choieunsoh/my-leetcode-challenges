/**
 * @param {number} n
 * @param {number[]} cost
 * @return {number}
 */
var minIncrements = function (n, cost) {
  let count = 0;
  solve(n);
  function solve(n) {
    let right = n - 1;
    let left = right - 1;
    let root = left >> 1;

    while (root > -1) {
      let max = Math.max(cost[left], cost[right]);
      let diff = Math.abs(cost[left] - cost[right]);
      count += diff;
      cost[root] += max;

      right = left - 1;
      left = right - 1;
      root = left >> 1;
    }
  }
  return count;
};
var minIncrements1 = function (n, cost) {
  let count = 0;
  let right = n - 1;
  let left = right - 1;
  let root = left >> 1;
  let max = Math.max(cost[left], cost[right]);
  let diff = Math.abs(cost[left] - cost[right]);
  console.log(diff, left >> 1);
  count += diff;
  cost[root] += max;
  console.log(count, max, diff, cost);

  right = left - 1;
  left = right - 1;
  root = left >> 1;
  max = Math.max(cost[left], cost[right]);
  diff = Math.abs(cost[left] - cost[right]);
  console.log(diff, left >> 1);
  count += diff;
  cost[root] += max;
  console.log(count, max, diff, cost);

  n >>= 1;
  right = n - 1;
  left = right - 1;
  root = left >> 1;
  max = Math.max(cost[left], cost[right]);
  diff = Math.abs(cost[left] - cost[right]);
  console.log(diff, left >> 1);
  count += diff;
  cost[root] += max;
  console.log(count, max, diff, cost);

  right = left - 1;
  left = right - 1;
  root = left >> 1;
  console.log(left, right, root);
  max = Math.max(cost[left], cost[right]);
  diff = Math.abs(cost[left] - cost[right]);
  console.log(diff, left >> 1);
  count += diff;
  cost[root] += max;
  console.log(count, max, diff, cost);

  return count;
};

var n = 7,
  cost = [1, 5, 2, 2, 3, 3, 1];
var expected = 6;
var result = minIncrements(n, cost);
console.log(result, result === expected);

var n = 15,
  cost = [1, 5, 2, 2, 3, 3, 1, 1, 3, 2, 3, 1, 3, 2, 3];
var expected = 12;
var result = minIncrements(n, cost);
console.log(result, result === expected);
