/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var solveQueries = function (nums, queries) {
  const n = nums.length;
  const valueToIndices = new Map();
  for (let i = 0; i < n; i++) {
    if (!valueToIndices.has(nums[i])) {
      valueToIndices.set(nums[i], []);
    }
    valueToIndices.get(nums[i]).push(i);
  }

  const result = [];
  for (const query of queries) {
    const targetValue = nums[query];
    const indices = valueToIndices.get(targetValue) ?? [];

    if (indices.length < 2) {
      result.push(-1);
      continue;
    }

    let left = 0;
    let right = indices.length - 1;
    let minDistance = Infinity;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (indices[mid] === query) {
        const idx1 = indices[mid - 1] ?? indices.at(-1);
        const dist1 = Math.abs(idx1 - query);

        const idx2 = indices[mid + 1] ?? indices[0];
        const dist2 = Math.abs(idx2 - query);

        const dist = Math.min(dist1, n - dist1, dist2, n - dist2);
        minDistance = Math.min(minDistance, dist);
        break;
      }

      if (indices[mid] < query) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    result.push(minDistance === Infinity ? -1 : minDistance);
  }

  return result;
};

var nums = [1, 3, 1, 4, 1, 3, 2],
  queries = [0, 3, 5];
var expected = [2, -1, 3];
var result = solveQueries(nums, queries);
console.log(result, result.join() === expected.join());

var nums = [1, 2, 3, 4],
  queries = [0, 1, 2, 3];
var expected = [-1, -1, -1, -1];
var result = solveQueries(nums, queries);
console.log(result, result.join() === expected.join());

var nums = [15, 1, 10, 1, 20, 4, 6, 14, 4, 9, 4, 18],
  queries = [0, 2, 10, 6, 11, 8];
var expected = [-1, -1, 2, -1, -1, 2];
var result = solveQueries(nums, queries);
console.log(result, result.join() === expected.join());

var nums = [14, 14, 4, 2, 19, 19, 14, 19, 14],
  queries = [2, 4, 8, 6, 3];
var expected = [-1, 1, 1, 2, -1];
var result = solveQueries(nums, queries);
console.log(result, result.join() === expected.join());
