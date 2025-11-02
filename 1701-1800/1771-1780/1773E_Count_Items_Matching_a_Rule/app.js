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
  const keysMap = { type: 0, color: 1, name: 2 };
  return items.filter((item) => item[keysMap[ruleKey]] === ruleValue).length;
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
