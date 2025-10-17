// 2325. Decode the Message
// https://leetcode.com/problems/decode-the-message/
// T.C.: O(m+n)
// S.C.: O(1)
/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const a = 'a'.charCodeAt(0);
  const keys = new Array(26);
  let idx = 0;
  for (let i = 0; i < key.length; i++) {
    if (key[i] >= 'a' && key[i] <= 'z') {
      const charIndex = key.charCodeAt(i) - a;
      if (!keys[charIndex]) {
        keys[charIndex] = String.fromCharCode(a + idx);
        idx++;
      }
    }
  }

  let secret = '';
  for (let i = 0; i < message.length; i++) {
    const ch = message.charAt(i);
    if (ch >= 'a' && ch <= 'z') {
      secret += keys[message.charCodeAt(i) - a];
    } else {
      secret += ch;
    }
  }
  return secret;
};

var key = 'the quick brown fox jumps over the lazy dog',
  message = 'vkbs bs t suepuv';
var expected = 'this is a secret';
var result = decodeMessage(key, message);
console.log(result, result === expected);

var key = 'eljuxhpwnyrdgtqkviszcfmabo',
  message = 'zwx hnfx lqantp mnoeius ycgk vcnjrdb';
var expected = 'the five boxing wizards jump quickly';
var result = decodeMessage(key, message);
console.log(result, result === expected);
