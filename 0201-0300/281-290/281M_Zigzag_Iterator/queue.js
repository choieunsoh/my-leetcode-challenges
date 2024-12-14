// 281. Zigzag Iterator
// https://leetcode.com/problems/zigzag-iterator/description/
// T.C.: O(1)
// S.C.: O(n)
/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
  this.lists = [v1, v2];
  this.queue = [];
  for (let listIndex = 0; listIndex < this.lists.length; listIndex++) {
    if (this.lists[listIndex].length === 0) continue;
    this.queue.push([listIndex, 0]);
  }
};

/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
  return this.queue.length > 0;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
  const [listIndex, elementIndex] = this.queue.shift();
  const nextElementIndex = elementIndex + 1;
  if (nextElementIndex < this.lists[listIndex].length) {
    this.queue.push([listIndex, nextElementIndex]);
  }
  return this.lists[listIndex][elementIndex];
};

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

function run(v1, v2, expected) {
  const i = new ZigzagIterator(v1, v2);
  const result = [];
  while (i.hasNext()) result.push(i.next());
  console.log(result, result.join() === expected.join());
}

var v1 = [1, 2],
  v2 = [3, 4, 5, 6];
var expected = [1, 3, 2, 4, 5, 6];
run(v1, v2, expected);

var v1 = [1],
  v2 = [];
var expected = [1];
run(v1, v2, expected);

var v1 = [],
  v2 = [1];
var expected = [1];
run(v1, v2, expected);

var v1 = [],
  v2 = [];
var expected = [];
run(v1, v2, expected);
