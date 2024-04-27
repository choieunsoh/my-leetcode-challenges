// 514. Freedom Trail
// https://leetcode.com/problems/freedom-trail/description/
// T.C.: O(k * r)
// S.C.: O(k)
/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
  const MAX = Number.MAX_SAFE_INTEGER;
  let prevSteps = new Array(ring.length).fill(0);
  const indexMap = new Map();
  for (let ringIndex = 0; ringIndex < ring.length; ringIndex++) {
    const ringChar = ring[ringIndex];
    if (!indexMap.has(ringChar)) indexMap.set(ringChar, []);
    indexMap.get(ringChar).push(ringIndex);
  }

  for (let keyIndex = key.length - 1; keyIndex >= 0; keyIndex--) {
    const keyCharIndex = indexMap.get(key[keyIndex]);
    const currSteps = new Array(ring.length).fill(MAX);
    for (let ringIndex = 0; ringIndex < ring.length; ringIndex++) {
      for (const nextRingIndex of keyCharIndex) {
        const steps = getOptimalSteps(ringIndex, nextRingIndex);
        const pressButtonStep = 1;
        const nextSteps = prevSteps[nextRingIndex];
        const totalSteps = steps + pressButtonStep + nextSteps;
        currSteps[ringIndex] = Math.min(currSteps[ringIndex], totalSteps);
      }
    }
    prevSteps = currSteps;
  }
  return prevSteps[0];

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
