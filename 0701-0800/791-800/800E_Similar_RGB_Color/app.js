// 800. Similar RGB Color
// https://leetcode.com/problems/similar-rgb-color/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {string} color
 * @return {string}
 */
var similarRGB = function (color) {
  const red = getSimilarColor(color.slice(1, 3));
  const green = getSimilarColor(color.slice(3, 5));
  const blue = getSimilarColor(color.slice(5, 7));
  return `#${red}${green}${blue}`;

  function getSimilarColor(hex) {
    if (hex[0] === hex[1]) return hex;

    const digits = '0123456789abcdef';
    const n = digits.length;
    const a = hex[0];
    const b = hex[1];
    const aa = a + a;

    const inc = digits[(digits.indexOf(a) + 1) % n].repeat(2);
    const dec = digits[(digits.indexOf(a) - 1 + n) % n].repeat(2);
    const prev = a < b ? aa : dec;
    const next = a < b ? inc : aa;

    const hexVal = parseInt(hex, 16);
    const prevVal = parseInt(prev, 16);
    const nextVal = parseInt(next, 16);
    if (Math.abs(hexVal - prevVal) < Math.abs(hexVal - nextVal)) {
      return prev;
    } else {
      return next;
    }
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
