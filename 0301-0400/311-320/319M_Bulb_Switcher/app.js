// 319. Bulb Switcher
// https://leetcode.com/problems/bulb-switcher/
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
  return Math.floor(Math.sqrt(n));
};

var n = 3;
var expected = 1;
var result = bulbSwitch(n);
console.log(result, result === expected);

var n = 0;
var expected = 0;
var result = bulbSwitch(n);
console.log(result, result === expected);

var n = 1;
var expected = 1;
var result = bulbSwitch(n);
console.log(result, result === expected);

var n = 27;
var expected = 5;
var result = bulbSwitch(n);
console.log(result, result === expected);
