// 3152. Special Array II
// https://leetcode.com/problems/special-array-ii/description/
// T.C.: O(m+n)
// S.C.: O(m)
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
  const n = nums.length;
  const maxReach = new Array(n).fill(0);
  let end = 0;
  for (let start = 0; start < n; start++) {
    end = Math.max(end, start);

    while (end < n - 1 && nums[end] % 2 !== nums[end + 1] % 2) {
      end++;
    }

    maxReach[start] = end;
  }

  const result = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const [start, endQuery] = queries[i];
    result[i] = endQuery <= maxReach[start];
  }
  return result;
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
