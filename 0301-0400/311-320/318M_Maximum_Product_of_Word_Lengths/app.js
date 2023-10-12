// 318. Maximum Product of Word Lengths
// https://leetcode.com/problems/maximum-product-of-word-lengths/
// T.C.: O(n ^ 2)
// S.C.: O(n)
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  words.sort((a, b) => b.length - a.length);

  let result = 0;
  const bitMasks = new Array(words.length);
  const a = 'a'.charCodeAt(0);

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wLen = word.length;
    if (wLen * words[0].length < result) {
      return result;
    }

    let bitMask = 0;
    for (let j = 0; j < wLen; j++) {
      bitMask |= 1 << (word.charCodeAt(j) - a);
    }

    for (let j = 0; j < i; j++) {
      if ((bitMasks[j] & bitMask) === 0) {
        result = Math.max(result, wLen * words[j].length);
      }
    }
    bitMasks[i] = bitMask;
  }
  return result;
};

var words = ['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef'];
var expected = 16;
var result = maxProduct(words);
console.log(result, result === expected);

var words = ['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd'];
var expected = 4;
var result = maxProduct(words);
console.log(result, result === expected);

var words = ['a', 'aa', 'aaa', 'aaaa'];
var expected = 0;
var result = maxProduct(words);
console.log(result, result === expected);
