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
  for (let i = 1; i < travel.length; i++) {
    travel[i] += travel[i - 1];
  }

  let result = garbage.join('').length;
  let lastG = 0;
  let lastM = 0;
  let lastP = 0;
  for (let i = garbage.length - 1; i >= 0; i--) {
    if (lastG === 0 && garbage[i].includes('G')) lastG = i;
    if (lastM === 0 && garbage[i].includes('M')) lastM = i;
    if (lastP === 0 && garbage[i].includes('P')) lastP = i;
  }

  result += travel[lastG - 1] ?? 0;
  result += travel[lastM - 1] ?? 0;
  result += travel[lastP - 1] ?? 0;
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
