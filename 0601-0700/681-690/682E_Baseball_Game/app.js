// https://leetcode.com/problems/baseball-game/
// 682. Baseball Game
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const scores = [];
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    if (op === 'D') {
      scores.push(scores[scores.length - 1] * 2);
    } else if (op === 'C') {
      scores.pop();
    } else if (op === '+') {
      scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
    } else {
      scores.push(+op);
    }
  }
  return scores.reduce((acc, cur) => acc + cur, 0);
};

var ops = ['5', '2', 'C', 'D', '+'];
var expected = 30;
var result = calPoints(ops);
console.log(result, result === expected);

var ops = ['5', '-2', '4', 'C', 'D', '9', '+', '+'];
var expected = 27;
var result = calPoints(ops);
console.log(result, result === expected);

var ops = ['1', 'C'];
var expected = 0;
var result = calPoints(ops);
console.log(result, result === expected);
