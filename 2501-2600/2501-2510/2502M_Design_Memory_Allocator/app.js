// 2502. Design Memory Allocator
// https://leetcode.com/problems/design-memory-allocator/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 */
var Allocator = function (n) {
  this.memory = new Array(n).fill(0);
  this.length = n;
};

/**
 * @param {number} size
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.allocate = function (size, mID) {
  let startIndex = -1;
  for (let endIndex = 0; endIndex < this.length; endIndex++) {
    if (this.memory[endIndex] !== 0) {
      startIndex = -1;
      continue;
    }

    if (startIndex === -1) {
      startIndex = endIndex;
    }

    if (endIndex - startIndex + 1 >= size) {
      for (let i = 0; i < size; i++) {
        this.memory[startIndex + i] = mID;
      }
      return startIndex;
    }
  }
  return -1;
};

/**
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.free = function (mID) {
  let freeCount = 0;
  for (let i = 0; i < this.memory.length; i++) {
    if (this.memory[i] === mID) {
      this.memory[i] = 0;
      freeCount++;
    }
  }
  return freeCount;
};

/**
 * Your Allocator object will be instantiated and called as such:
 * var obj = new Allocator(n)
 * var param_1 = obj.allocate(size,mID)
 * var param_2 = obj.free(mID)
 */

function run(ops, input, output) {
  let obj = null;
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const args = input[i];
    const expected = output[i];
    let result = null;
    switch (op) {
      case 'allocate':
        result = obj.allocate(...args);
        break;
      case 'free':
        result = obj.free(...args);
        break;
      default:
        obj = new Allocator(...args);
        break;
    }
    console.log(i, expected, result, result === expected);
  }
}

var ops = [
    'Allocator',
    'allocate',
    'allocate',
    'allocate',
    'free',
    'allocate',
    'allocate',
    'allocate',
    'free',
    'allocate',
    'free',
  ],
  input = [[10], [1, 1], [1, 2], [1, 3], [2], [3, 4], [1, 1], [1, 1], [1], [10, 2], [7]],
  output = [null, 0, 1, 2, 1, 3, 1, 6, 3, -1, 0];
run(ops, input, output);
