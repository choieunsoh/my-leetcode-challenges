// https://leetcode.com/problems/daily-temperatures/
// 739. Daily Temperatures
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const result = Array(temperatures.length).fill(0);
  let hottest = Number.MIN_SAFE_INTEGER;
  for (let i = temperatures.length - 1; i >= 0; i--) {
    const temp = temperatures[i];
    if (temp >= hottest) {
      hottest = temp;
      continue;
    }

    let days = 1;
    while (temperatures[i + days] <= temp) {
      days += result[i + days];
    }

    result[i] = days;
  }

  return result;
};

var temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
var expected = [1, 1, 4, 2, 1, 1, 0, 0];
var result = dailyTemperatures(temperatures);
console.log(result.join(' '), result.join('') === expected.join(''));

var temperatures = [30, 40, 50, 60];
var expected = [1, 1, 1, 0];
var result = dailyTemperatures(temperatures);
console.log(result.join(' '), result.join('') === expected.join(''));

var temperatures = [30, 60, 90];
var expected = [1, 1, 0];
var result = dailyTemperatures(temperatures);
console.log(result.join(' '), result.join('') === expected.join(''));
