// 2069. Walking Robot Simulation II
// https://leetcode.com/problems/walking-robot-simulation-ii/description/
// T.C.: O()
// S.C.: O()
/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function (width, height) {
  this.moved = false;
  this.idx = 0;
  this.pos = [];
  this.dir = [];
  this.toDir = {
    0: 'East',
    1: 'North',
    2: 'West',
    3: 'South',
  };

  for (let i = 0; i < width; ++i) {
    this.pos.push([i, 0]);
    this.dir.push(0);
  }
  for (let i = 1; i < height; ++i) {
    this.pos.push([width - 1, i]);
    this.dir.push(1);
  }
  for (let i = width - 2; i >= 0; --i) {
    this.pos.push([i, height - 1]);
    this.dir.push(2);
  }
  for (let i = height - 2; i > 0; --i) {
    this.pos.push([0, i]);
    this.dir.push(3);
  }
  this.dir[0] = 3;
};

/**
 * @param {number} num
 * @return {void}
 */
Robot.prototype.step = function (num) {
  this.moved = true;
  this.idx = (this.idx + num) % this.pos.length;
};

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function () {
  return this.pos[this.idx];
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function () {
  if (!this.moved) {
    return 'East';
  }
  return this.toDir[this.dir[this.idx]];
};

/**
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */

function run(ops, inputs, outputs) {
  let obj = null;
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const args = inputs[i];
    const expected = outputs[i];
    let result = null;
    switch (op) {
      case 'Robot':
        obj = new Robot(...args);
        break;
      default:
        result = obj[op](...args) ?? null;
        break;
    }
    console.log(i, op, result, JSON.stringify(result) === JSON.stringify(expected));
  }
}

var ops = ['Robot', 'step', 'step', 'getPos', 'getDir', 'step', 'step', 'step', 'getPos', 'getDir'],
  inputs = [[6, 3], [2], [2], [], [], [2], [1], [4], [], []],
  outputs = [null, null, null, [4, 0], 'East', null, null, null, [1, 2], 'West'];
run(ops, inputs, outputs);
