// amendTheSentence
/**
 * @param {string} s
 * @return {string}
 */
function amendTheSentence(s) {
  let result = '';
  for (const c of s) {
    if (c.toUpperCase() == c) {
      result += ' ' + c.toLowerCase();
    } else {
      result += c;
    }
  }
  return result.trim();
}

var s = 'CodesignalIsAwesome';
var expected = 'codesignal is awesome';
var result = solution(s);
console.log(result, result === expected);
