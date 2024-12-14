// 281. Zigzag Iterator
// https://leetcode.com/problems/zigzag-iterator/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
  this.index1 = 0;
  this.index2 = 0;
  this.nums1 = v1;
  this.nums2 = v2;
  this.isNums1 = v1.length > 0;
};

/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
  return this.index1 < this.nums1.length || this.index2 < this.nums2.length;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
  let result;
  if (this.isNums1) {
    result = this.nums1[this.index1++];
    if (this.index2 < this.nums2.length) {
      this.isNums1 = false;
    }
  } else {
    result = this.nums2[this.index2++];
    if (this.index1 < this.nums1.length) {
      this.isNums1 = true;
    }
  }
  return result;
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
