// 1773. Count Items Matching a Rule
// https://leetcode.com/problems/count-items-matching-a-rule/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const idx = { type: 0, color: 1, name: 2 }[ruleKey];
  let count = 0;
  for (const item of items) {
    if (item[idx] === ruleValue) count++;
  }
  return count;
};

var items = [
    ['phone', 'blue', 'pixel'],
    ['computer', 'silver', 'lenovo'],
    ['phone', 'gold', 'iphone'],
  ],
  ruleKey = 'color',
  ruleValue = 'silver';
var expected = 1;
var result = countMatches(items, ruleKey, ruleValue);
console.log(result, result === expected);

var items = [
    ['phone', 'blue', 'pixel'],
    ['computer', 'silver', 'phone'],
    ['phone', 'gold', 'iphone'],
  ],
  ruleKey = 'type',
  ruleValue = 'phone';
var expected = 2;
var result = countMatches(items, ruleKey, ruleValue);
console.log(result, result === expected);
