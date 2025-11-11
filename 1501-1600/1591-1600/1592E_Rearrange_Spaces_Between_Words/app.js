// 1592. Rearrange Spaces Between Words
// https://leetcode.com/problems/rearrange-spaces-between-words/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  let totalSpaces = 0;
  for (const ch of text) {
    if (ch === ' ') totalSpaces++;
  }

  const words = text.trim().split(/\s+/);
  if (words.length === 1) return words[0] + ' '.repeat(totalSpaces);

  const spaces = (totalSpaces / (words.length - 1)) | 0;
  const remainSpaces = totalSpaces % (words.length - 1);
  const repeatedSpaces = ' '.repeat(spaces);
  const extraSpaces = ' '.repeat(remainSpaces);
  return words.join(repeatedSpaces) + extraSpaces;
};

var text = '  this   is  a sentence ';
var expected = 'this   is   a   sentence';
var result = reorderSpaces(text);
console.log(result, result === expected);

var text = ' practice   makes   perfect';
var expected = 'practice   makes   perfect ';
var result = reorderSpaces(text);
console.log(result, result === expected);

var text = '  hello';
var expected = 'hello  ';
var result = reorderSpaces(text);
console.log(result, result === expected);
