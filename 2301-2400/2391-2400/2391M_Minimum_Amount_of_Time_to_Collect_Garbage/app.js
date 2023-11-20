// 2391. Minimum Amount of Time to Collect Garbage
// https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
  const map = new Map();
  let [G, M, P] = [0, 0, 0];
  for (let i = 0; i < garbage.length; i++) {
    let [g, m, p] = [0, 0, 0];
    for (const c of garbage[i]) {
      if (c === 'G') g++;
      else if (c === 'M') m++;
      else if (c === 'P') p++;
    }
    if (g) {
      G += g;
      map.set('G', [i, G]);
    }
    if (m) {
      M += m;
      map.set('M', [i, M]);
    }
    if (p) {
      P += p;
      map.set('P', [i, P]);
    }
  }

  for (let i = 1; i < travel.length; i++) {
    travel[i] += travel[i - 1];
  }

  let result = 0;
  for (const [, [index, count]] of map) {
    result += (travel[index - 1] ?? 0) + count;
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
