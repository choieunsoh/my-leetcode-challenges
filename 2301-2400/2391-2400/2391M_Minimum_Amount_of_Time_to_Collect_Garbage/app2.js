// 2391. Minimum Amount of Time to Collect Garbage
// https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
  let result = 0;
  let [G, M, P] = [false, false, false];
  for (let i = garbage.length - 1; i >= 0; i--) {
    for (const c of garbage[i]) {
      if (c === 'G') G = true;
      else if (c === 'M') M = true;
      else if (c === 'P') P = true;
    }
    if (i > 0) {
      if (G) result += travel[i - 1];
      if (M) result += travel[i - 1];
      if (P) result += travel[i - 1];
    }
    result += garbage[i].length;
  }
  return result;
};

var garbage = ['G', 'P', 'GP', 'GG'],
  travel = [2, 4, 3];
var expected = 21;
var result = garbageCollection(garbage, travel);
console.log(result, result === expected);

var garbage = ['MMM', 'PGM', 'GP'],
  travel = [3, 10];
var expected = 37;
var result = garbageCollection(garbage, travel);
console.log(result, result === expected);
