// 2511. Maximum Enemy Forts That Can Be Captured
// https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function (forts) {
  let result = 0;
  let prevIndex = 0;
  for (let index = 0; index < forts.length; index++) {
    if (forts[index] === 0) continue;

    const fort = forts[index];
    const prevFort = forts[prevIndex];
    if (prevFort && fort !== prevFort) {
      result = Math.max(result, index - prevIndex - 1);
    }
    prevIndex = index;
  }
  return result;
};

var forts = [1, 0, 0, -1, 0, 0, 0, 0, 1];
var expected = 4;
var result = captureForts(forts);
console.log(result, result === expected);

var forts = [0, 0, 1, -1];
var expected = 0;
var result = captureForts(forts);
console.log(result, result === expected);

var forts = [1, 0, 0, -1, 0, 0, -1, 0, 0, 1];
var expected = 2;
var result = captureForts(forts);
console.log(result, result === expected);

var forts = [-1, -1, 0, 1, 0, 0, 1, -1, 1, 0];
var expected = 1;
var result = captureForts(forts);
console.log(result, result === expected);
