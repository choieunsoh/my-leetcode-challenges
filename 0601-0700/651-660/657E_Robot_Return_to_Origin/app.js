// https://leetcode.com/problems/robot-return-to-origin/
// 657. Robot Return to Origin
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let [x, y] = [0, 0];
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case 'U':
        y -= 1;
        break;
      case 'D':
        y += 1;
        break;
      case 'L':
        x -= 1;
        break;
      case 'R':
        x += 1;
        break;
    }
  }
  return x === 0 && y === 0;
};

var moves = 'UD';
var expected = true;
var result = judgeCircle(moves);
console.log(result, result === expected);

var moves = 'LL';
var expected = false;
var result = judgeCircle(moves);
console.log(result, result === expected);
