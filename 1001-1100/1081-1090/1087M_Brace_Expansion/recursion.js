// 1087. Brace Expansion
// https://leetcode.com/problems/brace-expansion/description/
// T.C.: O(N∗3^(N/7))
// S.C.: O(N∗3^(N/7))
/**
 * @param {string} s
 * @return {string[]}
 */
var expand = function (s) {
  return findAllWords(s, 0);

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

  function findAllWords(s, startPos) {
    // Return empty string list if the string is empty
    if (startPos === s.length) {
      return [''];
    }

    const firstOptions = [];
    // Store the characters for the first index as string in firstOptions
    const remStringStartPos = storeFirstOptions(s, startPos, firstOptions);
    const wordsWithRemString = findAllWords(s, remStringStartPos);

    const expandedWords = [];
    // Create new words by adding the character at the beginning
    for (const c of firstOptions) {
      for (const word of wordsWithRemString) {
        expandedWords.push(c + word);
      }
    }

    return expandedWords;
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
