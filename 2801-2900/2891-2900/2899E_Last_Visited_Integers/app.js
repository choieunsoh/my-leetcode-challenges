// 2899. Last Visited Integers
// https://leetcode.com/problems/last-visited-integers/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var lastVisitedIntegers = function (nums) {
  const seen = [];
  const ans = [];
  let k = 0;
  for (const num of nums) {
    if (num !== -1) {
      k = 0;
      seen.push(num);
    } else {
      k++;
      if (k <= seen.length) {
        ans.push(seen[seen.length - k]);
      } else {
        ans.push(-1);
      }
    }
  }
  return ans;
};

var nums = [1, 2, -1, -1, -1];
var expected = [2, 1, -1];
var result = lastVisitedIntegers(nums);
console.log(result, result.join() === expected.join());

var nums = [1, -1, 2, -1, -1];
var expected = [1, 2, 1];
var result = lastVisitedIntegers(nums);
console.log(result, result.join() === expected.join());
