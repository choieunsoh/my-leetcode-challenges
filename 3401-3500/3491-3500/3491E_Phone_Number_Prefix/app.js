// 3491. Phone Number Prefix
// https://leetcode.com/problems/phone-number-prefix/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {string[]} numbers
 * @return {boolean}
 */
var phonePrefix = function (numbers) {
  numbers.sort();
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i].startsWith(numbers[i - 1])) return false;
  }
  return true;
};

var numbers = ['1', '2', '4', '3'];
var expected = true;
var result = phonePrefix(numbers);
console.log(result, result === expected);

var numbers = ['001', '007', '15', '00153'];
var expected = false;
var result = phonePrefix(numbers);
console.log(result, result === expected);
