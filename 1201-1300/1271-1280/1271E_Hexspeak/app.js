// 1271. Hexspeak
// https://leetcode.com/problems/hexspeak/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} num
 * @return {string}
 */
var toHexspeak = function (num) {
  const hex = Number(num).toString(16).toUpperCase();
  let hexSpeak = '';
  for (let i = 0; i < hex.length; i++) {
    if (hex[i] >= '2' && hex[i] <= '9') return 'ERROR';
    if (hex[i] === '0') {
      hexSpeak += 'O';
    } else if (hex[i] === '1') {
      hexSpeak += 'I';
    } else {
      hexSpeak += hex[i];
    }
  }
  return hexSpeak;
};

var num = '257';
var expected = 'IOI';
var result = toHexspeak(num);
console.log(result, result === expected);

var num = '3';
var expected = 'ERROR';
var result = toHexspeak(num);
console.log(result, result === expected);
