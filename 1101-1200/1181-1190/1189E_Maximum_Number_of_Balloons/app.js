// 1189. Maximum Number of Balloons
// https://leetcode.com/problems/maximum-number-of-balloons/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const balloon = 'ablnolo';
  const balloonMap = buildMap(balloon);
  const textMap = buildMap(text);
  const result = new Array(5).fill(0);
  for (let i = 0; i < 5; i++) {
    const char = balloon.charAt(i);
    const needed = balloonMap.get(char) ?? 0;
    const count = textMap.get(char) ?? 0;
    result[i] += (count / needed) | 0;
  }
  return Math.min(...result);

  function buildMap(word) {
    const map = new Map();
    for (const char of word) {
      const count = map.get(char) ?? 0;
      map.set(char, count + 1);
    }
    return map;
  }
};

var text = 'nlaebolko';
var expected = 1;
var result = maxNumberOfBalloons(text);
console.log(result, result === expected);

var text = 'loonbalxballpoon';
var expected = 2;
var result = maxNumberOfBalloons(text);
console.log(result, result === expected);

var text = 'leetcode';
var expected = 0;
var result = maxNumberOfBalloons(text);
console.log(result, result === expected);

var text = 'balllllllllllloooooooooon';
var expected = 1;
var result = maxNumberOfBalloons(text);
console.log(result, result === expected);
