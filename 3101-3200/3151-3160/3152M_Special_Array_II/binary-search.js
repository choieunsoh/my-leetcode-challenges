// 3152. Special Array II
// https://leetcode.com/problems/special-array-ii/description/
// T.C.: O(m + n log m)
// S.C.: O(m)
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
  const result = new Array(queries.length);
  const violatingIndices = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] % 2 === nums[i - 1] % 2) {
      violatingIndices.push(i);
    }
  }

  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];
    const foundViolatingIndex = binarySearch(start + 1, end, violatingIndices);
    result[i] = !foundViolatingIndex;
  }
  return result;

  function binarySearch(start, end, violatingIndices) {
    let left = 0;
    let right = violatingIndices.length - 1;
    while (left <= right) {
      const mid = (left + (right - left)) >> 1;
      const violatingIndex = violatingIndices[mid];
      if (violatingIndex < start) {
        left = mid + 1;
      } else if (violatingIndex > end) {
        right = mid - 1;
      } else {
        return true;
      }
    }
    return false;
  }
};

var nums = [3, 4, 1, 2, 6],
  queries = [[0, 4]];
var expected = [false];
var result = isArraySpecial(nums, queries);
console.log(result, result.join() === expected.join());

var nums = [4, 3, 1, 6],
  queries = [
    [0, 2],
    [2, 3],
  ];
var expected = [false, true];
var result = isArraySpecial(nums, queries);
console.log(result, result.join() === expected.join());
