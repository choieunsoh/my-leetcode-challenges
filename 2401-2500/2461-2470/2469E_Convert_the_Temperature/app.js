// 2469. Convert the Temperature
// https://leetcode.com/problems/convert-the-temperature/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
  const kelvin = celsius + 273.15;
  const fahrenheit = celsius * 1.8 + 32.0;
  return [kelvin, fahrenheit];
};

var celsius = 36.5;
var expected = [309.65, 97.7];
var result = convertTemperature(celsius);
console.log(result, result.join() === expected.join());

var celsius = 122.11;
var expected = [395.26, 251.798];
var result = convertTemperature(celsius);
console.log(result, result.join() === expected.join());
