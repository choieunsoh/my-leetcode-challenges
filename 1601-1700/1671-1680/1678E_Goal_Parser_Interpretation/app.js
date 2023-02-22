// 1678. Goal Parser Interpretation
// https://leetcode.com/problems/goal-parser-interpretation/
/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let result = '';
  for (let i = 0; i < command.length; i++) {
    const ch1 = command[i];
    const ch2 = command[i + 1];
    if (ch1 === 'G') {
      result += 'G';
    } else if (ch1 === '(' && ch2 === ')') {
      result += 'o';
      i++;
    } else {
      result += 'al';
      i += 3;
    }
  }
  return result;
};

var command = 'G()(al)';
var expected = 'Goal';
var result = interpret(command);
console.log(result, result === expected);

var command = 'G()()()()(al)';
var expected = 'Gooooal';
var result = interpret(command);
console.log(result, result === expected);

var command = '(al)G(al)()()G';
var expected = 'alGalooG';
var result = interpret(command);
console.log(result, result === expected);
