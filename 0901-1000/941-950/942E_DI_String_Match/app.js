// https://leetcode.com/problems/di-string-match/
// 942. DI String Match
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  const result = [];
  let increaseNum = 0;
  let decreaseNum = s.length;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'I') {
      result.push(increaseNum++);
    } else if (s[i] === 'D') {
      result.push(decreaseNum--);
    }
  }

  result.push(increaseNum);
  return result;
};

var s = 'IDID';
var expected = [0, 4, 1, 3, 2];
var result = diStringMatch(s);
console.log(result, result.join() === expected.join());

var s = 'III';
var expected = [0, 1, 2, 3];
var result = diStringMatch(s);
console.log(result, result.join() === expected.join());

var s = 'DDI';
var expected = [3, 2, 0, 1];
var result = diStringMatch(s);
console.log(result, result.join() === expected.join());

var s = 'D';
var expected = [1, 0];
var result = diStringMatch(s);
console.log(result, result.join() === expected.join());

var s = 'I';
var expected = [0, 1];
var result = diStringMatch(s);
console.log(result, result.join() === expected.join());
