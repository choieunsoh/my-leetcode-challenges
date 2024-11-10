// 2034. Stock Price Fluctuation
// https://leetcode.com/problems/stock-price-fluctuation/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { PriorityQueue } = require('@datastructures-js/priority-queue');

var StockPrice = function () {
  this.prices = new Map();
  this.minHeap = new PriorityQueue({ compare: (a, b) => a[0] - b[0] });
  this.maxHeap = new PriorityQueue({ compare: (a, b) => b[0] - a[0] });
  this.latestTimestamp = -1;
};

/**
 * @param {number} timestamp
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function (timestamp, price) {
  this.prices.set(timestamp, price);
  this.latestTimestamp = Math.max(this.latestTimestamp, timestamp);
  this.minHeap.enqueue([price, timestamp]);
  this.maxHeap.enqueue([price, timestamp]);
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function () {
  if (this.latestTimestamp === -1) return null;
  return this.prices.get(this.latestTimestamp);
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function () {
  return this._getPrice(this.maxHeap);
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function () {
  return this._getPrice(this.minHeap);
};

StockPrice.prototype._getPrice = function (heap) {
  if (this.latestTimestamp === -1) return null;
  let [price, timestamp] = heap.front();
  while (price !== this.prices.get(timestamp)) {
    heap.dequeue();
    [price, timestamp] = heap.front();
  }
  return price;
};

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */

function run(ops, inputs, outputs) {
  const obj = new StockPrice();
  for (let i = 1; i < ops.length; i++) {
    const expected = outputs[i];
    const result = obj[ops[i]](...inputs[i]) ?? null;
    console.log(i, ops[i], inputs[i], result, result === expected);
  }
  console.log();
}

var ops = ['StockPrice', 'update', 'update', 'current', 'maximum', 'update', 'maximum', 'update', 'minimum'],
  inputs = [[], [1, 10], [2, 5], [], [], [1, 3], [], [4, 2], []],
  outputs = [null, null, null, 5, 10, null, 5, null, 2];
run(ops, inputs, outputs);

var ops = [
    'StockPrice',
    'update',
    'maximum',
    'current',
    'minimum',
    'maximum',
    'maximum',
    'maximum',
    'minimum',
    'minimum',
    'maximum',
    'update',
    'maximum',
    'minimum',
    'update',
    'maximum',
    'minimum',
    'current',
    'maximum',
    'update',
    'minimum',
    'maximum',
    'update',
    'maximum',
    'maximum',
    'current',
    'update',
    'current',
    'minimum',
    'update',
    'update',
    'minimum',
    'minimum',
    'update',
    'current',
    'update',
    'maximum',
    'update',
    'minimum',
  ],
  inputs = [
    [],
    [38, 2308],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [47, 7876],
    [],
    [],
    [58, 1866],
    [],
    [],
    [],
    [],
    [43, 121],
    [],
    [],
    [40, 5339],
    [],
    [],
    [],
    [32, 5339],
    [],
    [],
    [43, 6414],
    [49, 9369],
    [],
    [],
    [36, 3192],
    [],
    [48, 1006],
    [],
    [53, 8013],
    [],
  ],
  outputs = [
    null,
    null,
    2308,
    2308,
    2308,
    2308,
    2308,
    2308,
    2308,
    2308,
    2308,
    null,
    7876,
    2308,
    null,
    7876,
    1866,
    1866,
    7876,
    null,
    121,
    7876,
    null,
    7876,
    7876,
    1866,
    null,
    1866,
    121,
    null,
    null,
    1866,
    1866,
    null,
    1866,
    null,
    9369,
    null,
    1006,
  ];
run(ops, inputs, outputs);
