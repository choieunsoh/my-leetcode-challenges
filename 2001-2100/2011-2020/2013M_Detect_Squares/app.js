// 2013. Detect Squares
// https://leetcode.com/problems/detect-squares/description/
// T.C.: O(n)
// S.C.: O(n)

var DetectSquares = function () {
  this.points = new Map();
};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
  const [x, y] = point;
  const xMap = this.points;
  if (!xMap.has(x)) {
    xMap.set(x, new Map([[y, 1]]));
    return;
  }

  const yMap = xMap.get(x);
  const count = yMap.get(y) ?? 0;
  yMap.set(y, count + 1);
};

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {
  let result = 0;
  const [x1, y1] = point;
  const xMap = this.points;
  for (const [x2, yMap] of xMap) {
    if (x1 === x2) continue;
    for (const [y2, count] of yMap) {
      if (y1 === y2) continue;
      if (Math.abs(x1 - x2) !== Math.abs(y1 - y2)) continue;

      if (xMap.has(x1) && xMap.get(x1).has(y2) && xMap.has(x2) && xMap.get(x2).has(y1)) {
        result += count * xMap.get(x1).get(y2) * xMap.get(x2).get(y1);
      }
    }
  }
  return result;
};

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */

function run(ops, input, output) {
  let obj = null;
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const args = input[i];
    const expected = output[i];
    let result = null;
    switch (op) {
      case 'add':
        obj.add(args[0]);
        break;
      case 'count':
        result = obj.count(args[0]);
        break;
      default:
        obj = new DetectSquares();
        break;
    }
    console.log(i, op, result, result === expected);
  }
}

var ops = ['DetectSquares', 'add', 'add', 'add', 'count', 'count', 'add', 'count'],
  input = [[], [[3, 10]], [[11, 2]], [[3, 2]], [[11, 10]], [[14, 8]], [[11, 2]], [[11, 10]]],
  output = [null, null, null, null, 1, 0, null, 2];
run(ops, input, output);
