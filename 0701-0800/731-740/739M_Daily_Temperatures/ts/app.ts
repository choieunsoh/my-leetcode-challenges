// 739. Daily Temperatures
// https://leetcode.com/problems/daily-temperatures/
var dailyTemperatures = function (temperatures: number[]): number[] {
  const totalDays = temperatures.length;
  const days = Array(totalDays).fill(0);
  const stack: number[] = [];
  for (let dayIndex = 0; dayIndex < totalDays; dayIndex++) {
    const temp = temperatures[dayIndex];
    while (stack.length && temp > latestTemp()) {
      const prevDayIndex = stack.pop()!;
      days[prevDayIndex] = dayIndex - prevDayIndex;
    }
    stack.push(dayIndex);
  }
  return days;

  function latestTemp() {
    return temperatures[stack[stack.length - 1]];
  }
};

var temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
var expected = [1, 1, 4, 2, 1, 1, 0, 0];
var result = dailyTemperatures(temperatures);
console.log(result, result.join() === expected.join());

var temperatures = [30, 40, 50, 60];
var expected = [1, 1, 1, 0];
var result = dailyTemperatures(temperatures);
console.log(result, result.join() === expected.join());

var temperatures = [30, 60, 90];
var expected = [1, 1, 0];
var result = dailyTemperatures(temperatures);
console.log(result, result.join() === expected.join());
