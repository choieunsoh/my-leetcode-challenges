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

  let result = 0;
  const lenB = v[1].length;
  const lenC = v[2].length;
  for (let cntB = lenB - 2; cntB <= lenB; cntB++) {
    if (cntB >= 0) {
      for (let cntC = lenC - 2; cntC <= lenC; cntC++) {
        if (cntC >= 0 && (cntB - cntC) % 3 === 0) {
          result = Math.max(result, getSum(v[1], 0, cntB) + getSum(v[2], 0, cntC));
        }
      }
    }
  }
  return result + getSum(v[0], 0, v[0].length);

  function getSum(list, start, end) {
    let sum = 0;
    for (let i = start; i < end; ++i) {
      sum += list[i];
    }
    return sum;
  }
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
