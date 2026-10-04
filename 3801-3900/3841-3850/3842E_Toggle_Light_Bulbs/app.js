// 3842. Toggle Light Bulbs
// https://leetcode.com/problems/toggle-light-bulbs/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} bulbs
 * @return {number[]}
 */
var toggleLightBulbs = function (bulbs) {
  const bulbStates = new Int8Array(101).fill(0);
  for (const bulb of bulbs) {
    bulbStates[bulb] = !bulbStates[bulb];
  }
  const result = [];
  for (let i = 1; i < bulbStates.length; i++) {
    if (bulbStates[i]) {
      result.push(i);
    }
  }
  return result;
};

var bulbs = [10, 30, 20, 10];
var expected = [20, 30];
var result = toggleLightBulbs(bulbs);
console.log(result, result.toString() === expected.toString());

var bulbs = [100, 100];
var expected = [];
var result = toggleLightBulbs(bulbs);
console.log(result, result.toString() === expected.toString());
