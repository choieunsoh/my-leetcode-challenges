// 2343. Query Kth Smallest Trimmed Number
// https://leetcode.com/problems/query-kth-smallest-trimmed-number/
/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function (nums, queries) {
  const queriesByTrimLength = queries.map((_, i) => i).sort((a, b) => queries[a][1] - queries[b][1]);
  const numIndices = nums.map((_, i) => i);
  const numLength = nums[0].length;
  let digit = 0;
  const result = new Array(queries.length).fill(-1);
  for (const queryIdx of queriesByTrimLength) {
    const [k, trim] = queries[queryIdx];
    while (trim > digit) {
      digit++;
      radixSort(numIndices, nums, numLength - digit);
    }
    result[queryIdx] = numIndices[k - 1];
  }
  return result;

  function radixSort(indices, nums, digit) {
    const buckets = new Array(10).fill(0).map(() => []);
    for (const idx of indices) {
      buckets[+nums[idx][digit]].push(idx);
    }

    let current = 0;
    for (const bucket of buckets) {
      for (const idx of bucket) {
        indices[current] = idx;
        current += 1;
      }
    }
  }
};

var nums = ['102', '473', '251', '814'],
  queries = [
    [1, 1],
    [2, 3],
    [4, 2],
    [1, 2],
  ];
var expected = [2, 2, 1, 0];
var result = smallestTrimmedNumbers(nums, queries);
console.log(result, result.join() === expected.join());

var nums = ['24', '37', '96', '04'],
  queries = [
    [2, 1],
    [2, 2],
  ];
var expected = [3, 0];
var result = smallestTrimmedNumbers(nums, queries);
console.log(result, result.join() === expected.join());
