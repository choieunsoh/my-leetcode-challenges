// https://leetcode.com/problems/daily-temperatures/
// 739. Daily Temperatures
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const days = Array(temperatures.length).fill(0);
  const stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevDay = stack.pop();
      days[prevDay] = i - prevDay;
    }
    stack.push(i);
  }

  return days;
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
