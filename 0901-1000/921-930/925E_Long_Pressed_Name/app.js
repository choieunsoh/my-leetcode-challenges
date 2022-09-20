// https://leetcode.com/problems/long-pressed-name/
// 925. Long Pressed Name
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let nameIndex = 0;
  let typedIndex = 0;
  while (nameIndex <= name.length) {
    if (name[nameIndex] === typed[typedIndex]) {
      nameIndex++;
      typedIndex++;
      continue;
    }
    if (name[nameIndex - 1] === typed[typedIndex]) {
      typedIndex++;
      continue;
    }
    return false;
  }
  return true;
};

var name = 'alex',
  typed = 'aaleex';
var expected = true;
var result = isLongPressedName(name, typed);
console.log(result, result === expected);

var name = 'saeed',
  typed = 'ssaaedd';
var expected = false;
var result = isLongPressedName(name, typed);
console.log(result, result === expected);

var name = 'leelee',
  typed = 'lleeelee';
var expected = true;
var result = isLongPressedName(name, typed);
console.log(result, result === expected);
