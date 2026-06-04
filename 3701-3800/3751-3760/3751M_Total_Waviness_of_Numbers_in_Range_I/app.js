// 3751. Total Waviness of Numbers in Range I
// https://leetcode.com/problems/total-waviness-of-numbers-in-range-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function (num1, num2) {
  let count = 0;

  for (let i = num1; i <= num2; i++) {
    if (i < 100) {
      continue;
    }

    let number = i;
    while (number >= 100) {
      const right = number % 10;
      const center = (((number % 100) - right) / 10) | 0;
      const left = (((number % 1000) - center * 10 - right) / 100) | 0;

      if ((center > right && center > left) || (center < right && center < left)) {
        count++;
      }

      number = (number / 10) | 0;
    }
  }

  return count;
};

var num1 = 120,
  num2 = 130;
var expected = 3;
var result = totalWaviness(num1, num2);
console.log(result, result === expected);

var num1 = 198,
  num2 = 202;
var expected = 3;
var result = totalWaviness(num1, num2);
console.log(result, result === expected);

var num1 = 4848,
  num2 = 4848;
var expected = 2;
var result = totalWaviness(num1, num2);
console.log(result, result === expected);
