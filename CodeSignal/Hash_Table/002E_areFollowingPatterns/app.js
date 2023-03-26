// areFollowingPatterns
// LC-290: https://leetcode.com/problems/word-pattern/
/**
 * @param {string[][]} strings
 * @param {string[][]} patterns
 * @return {boolean}
 */
function areFollowingPatterns(strings, patterns) {
  const n = strings.length;
  const wordSet = new Set();
  const patternMap = new Map();
  for (let i = 0; i < n; i++) {
    const word = strings[i];
    const pattern = patterns[i];
    if (patternMap.has(pattern)) {
      const expectedWord = patternMap.get(pattern);
      if (expectedWord !== word) return false;
    } else {
      patternMap.set(pattern, word);
      if (wordSet.has(word)) return false;
      wordSet.add(word);
    }
  }
  return true;
}

var strings = ['cat', 'dog', 'dog'],
  patterns = ['a', 'b', 'b'];
var expected = true;
var result = areFollowingPatterns(strings, patterns);
console.log(result, result === expected);

var strings = ['cat', 'dog', 'doggy'],
  patterns = ['a', 'b', 'b'];
var expected = false;
var result = areFollowingPatterns(strings, patterns);
console.log(result, result === expected);
