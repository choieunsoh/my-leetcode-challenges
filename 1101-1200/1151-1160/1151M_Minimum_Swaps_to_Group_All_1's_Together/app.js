// 1151. Minimum Swaps to Group All 1's Together
// https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function (data) {
  const countOne = data.reduce((acc, cur) => acc + cur, 0);
  let sum = 0;
  for (let i = 0; i < countOne; i++) {
    sum += data[i];
  }

  let swaps = countOne - sum;
  for (let right = countOne; right < data.length; right++) {
    const left = right - countOne;
    sum += data[right] - data[left];
    swaps = Math.min(swaps, countOne - sum);
  }

  return swaps;
};

var data = [1, 0, 1, 0, 1];
var expected = 1;
var result = minSwaps(data);
console.log(result, result === expected);

var data = [0, 0, 0, 1, 0];
var expected = 0;
var result = minSwaps(data);
console.log(result, result === expected);

var data = [1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1];
var expected = 3;
var result = minSwaps(data);
console.log(result, result === expected);
