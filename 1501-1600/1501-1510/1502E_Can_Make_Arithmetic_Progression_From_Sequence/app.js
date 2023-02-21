// 1502. Can Make Arithmetic Progression From Sequence
// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/?envType=study-plan&id=programming-skills-i
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);
  const diff = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) return false;
  }
  return true;
};

var arr = [3, 5, 1];
var expected = true;
var result = canMakeArithmeticProgression(arr);
console.log(result, result === expected);

var arr = [1, 2, 4];
var expected = false;
var result = canMakeArithmeticProgression(arr);
console.log(result, result === expected);
