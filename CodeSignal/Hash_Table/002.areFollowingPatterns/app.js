// areFollowingPatterns
/**
 * @param {string[][]} strings
 * @param {string[][]} patterns
 * @return {boolean}
 */
function solution(strings, patterns) {
  const n = strings.length;
  const words = new Map();
  const seen = new Map();
  for (let i = 0; i < n; i++) {
    const word = strings[i];
    const pattern = patterns[i];
    if (words.has(word)) {
      const expectedPattern = words.get(word);
      if (expectedPattern !== pattern) return false;
    } else {
      words.set(word, pattern);
    }
    if (seen.has(pattern)) {
      const expectedWord = seen.get(pattern);
      if (expectedWord !== word) return false;
    } else {
      seen.set(pattern, word);
    }
  }
  return true;
}

var strings = ['cat', 'dog', 'dog'],
  patterns = ['a', 'b', 'b'];
var expected = true;
var result = solution(strings, patterns);
console.log(result, result === expected);

var strings = ['cat', 'dog', 'doggy'],
  patterns = ['a', 'b', 'b'];
var expected = false;
var result = solution(strings, patterns);
console.log(result, result === expected);
