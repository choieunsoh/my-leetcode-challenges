// 981. Time Based Key-Value Store
// https://leetcode.com/problems/time-based-key-value-store/
// T.C.: O(log n)
// S.C.: O(n)

var TimeMap = function () {
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map.has(key)) {
    this.map.set(key, []);
  }
  this.map.get(key).push([value, timestamp]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map.has(key)) {
    return '';
  }
  const values = this.map.get(key);
  return this._search(values, timestamp);
};

TimeMap.prototype._search = function (values, targetTimestamp) {
  let result = '';
  let left = 0;
  let right = values.length - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    const [value, timestamp] = values[mid];
    if (timestamp === targetTimestamp) return value;
    if (timestamp > targetTimestamp) {
      right = mid - 1;
    } else {
      result = value;
      left = mid + 1;
    }
  }
  return result;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
/*
Input
["TimeMap", "set", "get", "get", "set", "get", "get"]
[[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
Output
[null, null, "bar", "bar", null, "bar2", "bar2"]
*/
function test(ops, inputs, outputs) {
  var obj = new TimeMap();
  for (let i = 0; i < ops.length; i++) {
    const args = inputs[i];
    const expected = outputs[i];
    let result = null;
    switch (ops[i]) {
      case 'set':
        obj.set(...args);
        break;
      case 'get':
        result = obj.get(...args);
        break;
      default:
        obj = new TimeMap();
        break;
    }
    console.log(i, ops[i], result, expected, result === expected);
  }
  console.log();
}

var ops = ['TimeMap', 'set', 'get', 'get', 'set', 'get', 'get'];
var inputs = [[], ['foo', 'bar', 1], ['foo', 1], ['foo', 3], ['foo', 'bar2', 4], ['foo', 4], ['foo', 5]];
var outputs = [null, null, 'bar', 'bar', null, 'bar2', 'bar2'];
test(ops, inputs, outputs);

var ops = ['TimeMap', 'set', 'set', 'get', 'get', 'get', 'get', 'get'];
var inputs = [
  [],
  ['love', 'high', 10],
  ['love', 'low', 20],
  ['love', 5],
  ['love', 10],
  ['love', 15],
  ['love', 20],
  ['love', 25],
];
var outputs = [null, null, null, '', 'high', 'high', 'low', 'low'];
test(ops, inputs, outputs);
