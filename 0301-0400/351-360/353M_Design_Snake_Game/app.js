// 353. Design Snake Game
// https://leetcode.com/problems/design-snake-game/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
var SnakeGame = function (width, height, food) {
  this.width = width;
  this.height = height;
  this.food = food;
  this.foodIndex = 0;
  this.snakeSet = new Set('0-0');
  this.snakeBody = [[0, 0]];
};

/**
 * @param {string} direction
 * @return {number}
 */
SnakeGame.prototype.move = function (direction) {
  let [newHeadRow, newHeadCol] = this.snakeBody[0];
  let [tailRow, tailCol] = this.snakeBody[this.snakeBody.length - 1];
  switch (direction) {
    case 'L':
      newHeadCol--;
      break;
    case 'R':
      newHeadCol++;
      break;
    case 'U':
      newHeadRow--;
      break;
    case 'D':
      newHeadRow++;
      break;
  }

  if (newHeadRow < 0 || newHeadRow >= this.height || newHeadCol < 0 || newHeadCol >= this.width) {
    return -1;
  }

  const newHead = `${newHeadRow}-${newHeadCol}`;
  const currentTail = `${tailRow}-${tailCol}`;
  if (newHead !== currentTail && this.snakeSet.has(newHead)) {
    return -1;
  }

  if (
    this.foodIndex < this.food.length &&
    newHeadRow === this.food[this.foodIndex][0] &&
    newHeadCol === this.food[this.foodIndex][1]
  ) {
    this.foodIndex++;
  } else {
    this.snakeBody.pop();
    this.snakeSet.delete(currentTail);
  }

  this.snakeBody.unshift([newHeadRow, newHeadCol]);
  this.snakeSet.add(newHead);

  return this.snakeBody.length - 1;
};

/**
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */

function test() {
  var obj = null;
  for (let i = 0; i < inputs.length; i++) {
    const op = ops[i];
    const args = inputs[i];
    const expected = outputs[i];
    let result = null;
    switch (op) {
      case 'move':
        result = obj.move(args[0]);
        break;
      default:
        obj = new SnakeGame(...args);
        break;
    }
    console.log(i, op, args[0], expected, result, result === expected);
  }
}

var ops = ['SnakeGame', 'move', 'move', 'move', 'move', 'move', 'move'],
  inputs = [
    [
      3,
      2,
      [
        [1, 2],
        [0, 1],
      ],
    ],
    ['R'],
    ['D'],
    ['R'],
    ['U'],
    ['L'],
    ['U'],
  ],
  outputs = [null, 0, 0, 1, 1, 2, -1];
test(ops, inputs, outputs);

var ops = [
    'SnakeGame',
    'move',
    'move',
    'move',
    'move',
    'move',
    'move',
    'move',
    'move',
    'move',
    'move',
    'move',
    'move',
    'move',
    'move',
    'move',
  ],
  inputs = [
    [
      3,
      3,
      [
        [2, 0],
        [0, 0],
        [0, 2],
        [0, 1],
        [2, 2],
        [0, 1],
      ],
    ],
    ['D'],
    ['D'],
    ['R'],
    ['U'],
    ['U'],
    ['L'],
    ['D'],
    ['R'],
    ['R'],
    ['U'],
    ['L'],
    ['L'],
    ['D'],
    ['R'],
    ['U'],
  ],
  outputs = [null, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 4, -1];
test(ops, inputs, outputs);
