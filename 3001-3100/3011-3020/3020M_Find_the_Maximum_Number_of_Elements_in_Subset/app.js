// 3020. Find the Maximum Number of Elements in Subset
// https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/description/
// T.C.: O(n log log M)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums) {
  const counts = new Map();

  for (const num of nums) {
    counts.set(num, (counts.get(num) ?? 0) + 1);
  }

  const oneCnt = counts.get(1) ?? 0;
  let result = oneCnt % 2 ? oneCnt : oneCnt - 1;
  counts.delete(1);

  for (const num of counts.keys()) {
    let res = 0;
    let x = num;

    while (counts.has(x) && counts.get(x) > 1) {
      res += 2;
      x *= x;
    }

    result = Math.max(result, res + (counts.has(x) ? 1 : -1));
  }

  return result;
};

var nums = [5, 4, 1, 2, 2];
var expected = 3;
var result = maximumLength(nums);
console.log(result, result === expected);

var nums = [1, 3, 2, 4];
var expected = 1;
var result = maximumLength(nums);
console.log(result, result === expected);
