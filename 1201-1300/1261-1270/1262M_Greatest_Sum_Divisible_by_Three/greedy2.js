// 1262. Greatest Sum Divisible by Three
// https://leetcode.com/problems/greatest-sum-divisible-by-three/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function (nums) {
  const v = [[], [], []];
  for (const num of nums) {
    v[num % 3].push(num);
  }
  v[1].sort((a, b) => b - a);
  v[2].sort((a, b) => b - a);

  const total = nums.reduce((sum, num) => sum + num, 0);
  let remove = Infinity;

  if (total % 3 === 0) {
    remove = 0;
  } else if (total % 3 === 1) {
    if (v[1].length >= 1) {
      remove = Math.min(remove, v[1][v[1].length - 1]);
    }
    if (v[2].length >= 2) {
      remove = Math.min(remove, v[2][v[2].length - 2] + v[2][v[2].length - 1]);
    }
  } else {
    if (v[1].length >= 2) {
      remove = Math.min(remove, v[1][v[1].length - 2] + v[1][v[1].length - 1]);
    }
    if (v[2].length >= 1) {
      remove = Math.min(remove, v[2][v[2].length - 1]);
    }
  }

  return total - remove;
};

var nums = [3, 6, 5, 1, 8];
var expected = 18;
var result = maxSumDivThree(nums);
console.log(result, result === expected);

var nums = [4];
var expected = 0;
var result = maxSumDivThree(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 4];
var expected = 12;
var result = maxSumDivThree(nums);
console.log(result, result === expected);
