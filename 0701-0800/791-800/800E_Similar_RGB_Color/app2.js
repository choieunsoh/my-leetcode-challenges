// 800. Similar RGB Color
// https://leetcode.com/problems/similar-rgb-color/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {string} color
 * @return {string}
 */
var similarRGB = function (color) {
  const red = findTarget(color.slice(1, 3));
  const green = findTarget(color.slice(3, 5));
  const blue = findTarget(color.slice(5, 7));
  return `#${red}${green}${blue}`;

  function findTarget(hex) {
    const val = parseInt(hex, 16);
    const roundVal = Math.round(val / 17) * 17;
    return roundVal ? roundVal.toString(16) : '00';
  }
};

var color = '#09f166';
var expected = '#11ee66';
var result = similarRGB(color);
console.log(result, result === expected);

var color = '#4e3fe1';
var expected = '#5544dd';
var result = similarRGB(color);
console.log(result, result === expected);

var color = '#71c986';
var expected = '#77cc88';
var result = similarRGB(color);
console.log(result, result === expected);

var color = '#1c9e03';
var expected = '#229900';
var result = similarRGB(color);
console.log(result, result === expected);
