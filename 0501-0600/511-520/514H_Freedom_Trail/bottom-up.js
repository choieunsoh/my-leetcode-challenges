// 514. Freedom Trail
// https://leetcode.com/problems/freedom-trail/description/
// T.C.: O(k * r ^ 2)
// S.C.: O(k * r)
/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
  const MAX = Number.MAX_SAFE_INTEGER;
  const bestSteps = Array.from({ length: ring.length }, () => new Array(key.length + 1).fill(MAX));
  for (let ringIndex = 0; ringIndex < ring.length; ringIndex++) {
    bestSteps[ringIndex][key.length] = 0;
  }

  for (let keyIndex = key.length - 1; keyIndex >= 0; keyIndex--) {
    for (let ringIndex = 0; ringIndex < ring.length; ringIndex++) {
      for (let nextRingIndex = 0; nextRingIndex < ring.length; nextRingIndex++) {
        if (ring[nextRingIndex] !== key[keyIndex]) continue;
        const currSteps = getOptimalSteps(ringIndex, nextRingIndex);
        const pressButtonStep = 1;
        const nextSteps = bestSteps[nextRingIndex][keyIndex + 1];
        const totalSteps = currSteps + pressButtonStep + nextSteps;
        bestSteps[ringIndex][keyIndex] = Math.min(bestSteps[ringIndex][keyIndex], totalSteps);
      }
    }
  }
  return bestSteps[0][0];

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
