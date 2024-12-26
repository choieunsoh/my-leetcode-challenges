// 1087. Brace Expansion
// https://leetcode.com/problems/brace-expansion/description/
// T.C.: O(N∗3^(N/7))
// S.C.: O(N∗3^(N/7))
/**
 * @param {string} s
 * @return {string[]}
 */
var expand = function (s) {
  let expandedWords = [''];

  let startPos = 0;
  while (startPos < s.length) {
    const firstOptions = [];
    // Store the characters for the first index as string in firstOptions
    const remStringStartPos = storeFirstOptions(s, startPos, firstOptions);

    const currWords = [];
    // Append the string in the list firstOptions to string in expandedWords
    for (const word of expandedWords) {
      for (const c of firstOptions) {
        currWords.push(word + c);
      }
    }
    // Update the list expandedWords to have all the words
    expandedWords = currWords;
    // Pointing to the next character to be considered
    startPos = remStringStartPos;
  }

  return expandedWords;

  function storeFirstOptions(s, startPos, firstOptions) {
    // If the first character is not '{', it means a single character
    if (s.charAt(startPos) !== '{') {
      firstOptions.push(s.charAt(startPos));
    } else {
      // Store all the characters between '{' and '}'
      while (s.charAt(startPos) !== '}') {
        if (s.charAt(startPos) >= 'a' && s.charAt(startPos) <= 'z') {
          firstOptions.push(s.charAt(startPos));
        }
        startPos++;
      }
      // Sort the list
      firstOptions.sort();
    }
    // Increment it to point to the next character to be considered
    return startPos + 1;
  }
};

var s = '{a,b}c{d,e}f';
var expected = ['acdf', 'acef', 'bcdf', 'bcef'];
var result = expand(s);
console.log(result, result.sort().join() === expected.sort().join());

var s = 'abcd';
var expected = ['abcd'];
var result = expand(s);
console.log(result, result.sort().join() === expected.sort().join());

var s = '{a,b}{z,x,y}';
var expected = ['ax', 'ay', 'az', 'bx', 'by', 'bz'];
var result = expand(s);
console.log(result, result.sort().join() === expected.sort().join());
