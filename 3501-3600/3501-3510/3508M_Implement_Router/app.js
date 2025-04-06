// 3508. Implement Router
// https://leetcode.com/problems/implement-router/
// T.C.: O(log n)
// S.C.: O(n)
/**
 * @param {number} memoryLimit
 */
var Router = function (memoryLimit) {
  this.idx = 0;
  this.size = 0;
  this.storage = [];
  this.memoryLimit = memoryLimit;
  this.isExistMap = new Map();
  this.timestampMap = new Map();
  this.startMap = new Map();
};

/**
 * @param {number} source
 * @param {number} destination
 * @param {number} timestamp
 * @return {boolean}
 */
Router.prototype.addPacket = function (source, destination, timestamp) {
  const key = this._getKey([source, timestamp]);
  if (this.isExistMap.get(destination)?.has(key)) {
    return false;
  }

  if (this.size === this.memoryLimit) {
    this.forwardPacket();
  }

  this.size++;
  this.storage.push([source, destination, timestamp]);

  const set = this.isExistMap.get(destination) ?? new Set();
  set.add(key);
  this.isExistMap.set(destination, set);

  this.timestampMap.set(destination, this.timestampMap.get(destination) ?? []);
  this.timestampMap.get(destination).push(timestamp);

  this.startMap.set(destination, this.startMap.get(destination) ?? 0);

  return true;
};

/**
 * @return {number[]}
 */
Router.prototype.forwardPacket = function () {
  if (this.size === 0) return [];

  this.size--;
  const [source, destination, timestamp] = this.storage[this.idx++];

  const key = this._getKey([source, timestamp]);
  this.isExistMap.get(destination).delete(key);
  this.startMap.set(destination, this.startMap.get(destination) + 1);

  return [source, destination, timestamp];
};

/**
 * @param {number} destination
 * @param {number} startTime
 * @param {number} endTime
 * @return {number}
 */
Router.prototype.getCount = function (destination, startTime, endTime) {
  if (!this.isExistMap.has(destination)) return 0;

  const timestamps = this.timestampMap.get(destination);
  const startIdx = this.startMap.get(destination);

  const leftIdx = this._binarySearch(startTime, timestamps, startIdx, true);
  const rightIdx = this._binarySearch(endTime, timestamps, startIdx, false);

  if (leftIdx === null || rightIdx === null) return 0;

  return rightIdx - leftIdx + 1;
};

Router.prototype._getKey = function (array) {
  return array.join('#');
};

Router.prototype._binarySearch = function (target, timestamps, left, goLeft) {
  let idx = null;
  let right = timestamps.length - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (goLeft) {
      if (timestamps[mid] < target) {
        left = mid + 1;
      } else {
        idx = mid;
        right = mid - 1;
      }
    } else {
      if (timestamps[mid] > target) {
        right = mid - 1;
      } else {
        idx = mid;
        left = mid + 1;
      }
    }
  }
  return idx;
};

/**
 * Your Router object will be instantiated and called as such:
 * var obj = new Router(memoryLimit)
 * var param_1 = obj.addPacket(source,destination,timestamp)
 * var param_2 = obj.forwardPacket()
 * var param_3 = obj.getCount(destination,startTime,endTime)
 */

function run(ops, inputs, outputs) {
  let obj = null;
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const input = inputs[i];
    const expected = outputs[i];
    let result = null;
    switch (op) {
      case 'Router':
        obj = new Router(input[0]);
        break;
      case 'addPacket':
        result = obj.addPacket(...input);
        break;
      case 'forwardPacket':
        result = obj.forwardPacket();
        break;
      case 'getCount':
        result = obj.getCount(...input);
        break;
    }
    console.log(op, input, expected, result, JSON.stringify(result) === JSON.stringify(expected));
  }
  console.log('-------------------------------------');
}

var ops = [
    'Router',
    'addPacket',
    'addPacket',
    'addPacket',
    'addPacket',
    'addPacket',
    'forwardPacket',
    'addPacket',
    'getCount',
  ],
  inputs = [[3], [1, 4, 90], [2, 5, 90], [1, 4, 90], [3, 5, 95], [4, 5, 105], [], [5, 2, 110], [5, 100, 110]],
  outputs = [null, true, true, false, true, true, [2, 5, 90], true, 1];
run(ops, inputs, outputs);

var ops = ['Router', 'addPacket', 'forwardPacket', 'forwardPacket'],
  inputs = [[2], [7, 4, 90], [], []],
  outputs = [null, true, [7, 4, 90], []];
run(ops, inputs, outputs);

var ops = ['Router', 'addPacket', 'forwardPacket', 'getCount'],
  inputs = [[2], [2, 5, 1], [], [5, 1, 1]],
  outputs = [null, true, [2, 5, 1], 0];
run(ops, inputs, outputs);

var ops = ['Router', 'addPacket', 'addPacket', 'addPacket', 'getCount'],
  inputs = [[2], [4, 3, 1], [5, 4, 1], [2, 3, 4], [4, 1, 3]],
  outputs = [null, true, true, true, 1];
run(ops, inputs, outputs);

var ops = ['Router', 'addPacket', 'addPacket', 'getCount'],
  inputs = [[2], [3, 1, 1], [5, 2, 2], [1, 1, 1]],
  outputs = [null, true, true, 1];
run(ops, inputs, outputs);

var ops = ['Router', 'addPacket', 'forwardPacket', 'addPacket', 'forwardPacket'],
  inputs = [[2], [5, 1, 5], [], [4, 2, 5], []],
  outputs = [null, true, [5, 1, 5], true, [4, 2, 5]];
run(ops, inputs, outputs);
