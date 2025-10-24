// 2129. Capitalize the Title
// https://leetcode.com/problems/capitalize-the-title/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  const words = title.split(' ');
  const result = [];
  for (const word of words) {
    const lower = word.toLowerCase();
    if (word.length < 3) {
      result.push(lower);
    } else {
      result.push(word[0].toUpperCase() + lower.slice(1));
    }
  }
  return result.join(' ');
};

var title = 'capiTalIze tHe titLe';
var expected = 'Capitalize The Title';
var result = capitalizeTitle(title);
console.log(result, result === expected);

var title = 'First leTTeR of EACH Word';
var expected = 'First Letter of Each Word';
var result = capitalizeTitle(title);
console.log(result, result === expected);

var title = 'i lOve leetcode';
var expected = 'i Love Leetcode';
var result = capitalizeTitle(title);
console.log(result, result === expected);
