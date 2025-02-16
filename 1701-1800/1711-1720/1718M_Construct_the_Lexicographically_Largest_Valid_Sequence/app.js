// 1718. Construct the Lexicographically Largest Valid Sequence
// https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/description/
// T.C.: O(n!)
// S.C.: O(n)
/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function (n) {
  const nums = new Array(n * 2 - 1).fill(0);
  const used = new Array(n + 1).fill(false);
  backtrack(0);
  return nums;

  function backtrack(currIndex) {
    if (currIndex === nums.length) {
      return true;
    }

    if (nums[currIndex] !== 0) {
      return backtrack(currIndex + 1);
    }

    for (let num = n; num > 0; num--) {
      if (used[num]) continue;

      nums[currIndex] = num;
      used[num] = true;

      if (num === 1) {
        if (backtrack(currIndex + 1)) {
          return true;
        }
      } else if (currIndex + num < nums.length && nums[currIndex + num] === 0) {
        nums[currIndex + num] = num;
        if (backtrack(currIndex + 1)) {
          return true;
        }
        nums[currIndex + num] = 0;
      }

      nums[currIndex] = 0;
      used[num] = false;
    }

    return false;
  }
};

var n = 3;
var expected = [3, 1, 2, 3, 2];
var result = constructDistancedSequence(n);
console.log(result.join(), result.join() === expected.join());

var n = 5;
var expected = [5, 3, 1, 4, 3, 5, 2, 4, 2];
var result = constructDistancedSequence(n);
console.log(result.join(), result.join() === expected.join());

var n = 1;
var expected = [1];
var result = constructDistancedSequence(n);
console.log(result.join(), result.join() === expected.join());

var n = 2;
var expected = [2, 1, 2];
var result = constructDistancedSequence(n);
console.log(result.join(), result.join() === expected.join());

var n = 4;
var expected = [4, 2, 3, 2, 4, 3, 1];
var result = constructDistancedSequence(n);
console.log(result.join(), result.join() === expected.join());

var n = 6;
var expected = [6, 4, 2, 5, 2, 4, 6, 3, 5, 1, 3];
var result = constructDistancedSequence(n);
console.log(result.join(), result.join() === expected.join());

var n = 20;
var expected = [
  20, 18, 19, 15, 13, 17, 10, 16, 7, 5, 3, 14, 12, 3, 5, 7, 10, 13, 15, 18, 20, 19, 17, 16, 12, 14, 11, 9, 4, 6, 8, 2,
  4, 2, 1, 6, 9, 11, 8,
];
var result = constructDistancedSequence(n);
console.log(result.join(), result.join() === expected.join());
