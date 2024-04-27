// 514. Freedom Trail
// https://leetcode.com/problems/freedom-trail/description/
// T.C.: O(k * r ^ 2)
// S.C.: O(k * r ^ 2)
/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
  const bestSteps = Array.from({ length: ring.length }, () => new Array(key.length).fill(-1));
  return countSteps(0, 0);

  function countSteps(ringIndex, keyIndex, minSteps = Number.MAX_SAFE_INTEGER) {
    if (keyIndex === key.length) return 0;
    if (bestSteps[ringIndex][keyIndex] !== -1) return bestSteps[ringIndex][keyIndex];

    for (let nextRingIndex = 0; nextRingIndex < ring.length; nextRingIndex++) {
      if (ring[nextRingIndex] !== key[keyIndex]) continue;
      const currSteps = getOptimalSteps(ringIndex, nextRingIndex);
      const pressButtonStep = 1;
      const nextSteps = countSteps(nextRingIndex, keyIndex + 1);
      const totalSteps = currSteps + pressButtonStep + nextSteps;
      minSteps = Math.min(minSteps, totalSteps);
    }
    bestSteps[ringIndex][keyIndex] = minSteps;
    return minSteps;
  }

  function getOptimalSteps(currRingIndex, nextRingIndex) {
    const stepsBetween = Math.abs(currRingIndex - nextRingIndex);
    const stepsAround = ring.length - stepsBetween;
    return Math.min(stepsBetween, stepsAround);
  }
};

var ring = 'godding',
  key = 'gd';
var expected = 4;
var result = findRotateSteps(ring, key);
console.log(result, result === expected);

var ring = 'godding',
  key = 'godding';
var expected = 13;
var result = findRotateSteps(ring, key);
console.log(result, result === expected);
