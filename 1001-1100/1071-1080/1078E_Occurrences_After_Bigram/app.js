// 1078. Occurrences After Bigram
// https://leetcode.com/problems/occurrences-after-bigram/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  const result = [];
  const words = text.split(' ');
  for (let i = 1; i < words.length - 1; i++) {
    const firstWord = words[i - 1];
    const secondWord = words[i];
    if (firstWord === first && secondWord === second) {
      result.push(words[i + 1]);
    }
  }
  return result;
};

var text = 'alice is a good girl she is a good student',
  first = 'a',
  second = 'good';
var expected = ['girl', 'student'];
var result = findOcurrences(text, first, second);
console.log(result, result.join() === expected.join());

var text = 'we will we will rock you',
  first = 'we',
  second = 'will';
var expected = ['we', 'rock'];
var result = findOcurrences(text, first, second);
console.log(result, result.join() === expected.join());
