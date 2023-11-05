// 1535. Find the Winner of an Array Game
// https://leetcode.com/problems/find-the-winner-of-an-array-game/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function (arr, k) {
  const max = Math.max(...arr);
  let count = 0;
  let index = 1;
  let curr = arr[0];
  while (count < k) {
    if (arr[index] > curr) {
      curr = arr[index];
      if (curr === max) break;
      count = 0;
    }

    index++;
    count++;
  }
  return curr;
};

var arr = [2, 1, 3, 5, 4, 6, 7],
  k = 2;
var expected = 5;
var result = getWinner(arr, k);
console.log(result, result === expected);

var arr = [3, 2, 1],
  k = 10;
var expected = 3;
var result = getWinner(arr, k);
console.log(result, result === expected);

var arr = [2, 1, 3, 5, 4, 6, 7],
  k = 4;
var expected = 7;
var result = getWinner(arr, k);
console.log(result, result === expected);

var arr = [2, 1, 3, 5, 4, 6, 7],
  k = 1;
var expected = 2;
var result = getWinner(arr, k);
console.log(result, result === expected);

var arr = [1, 2, 3, 5, 4, 6, 7],
  k = 1;
var expected = 2;
var result = getWinner(arr, k);
console.log(result, result === expected);
