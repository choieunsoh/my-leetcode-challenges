// 2326. Spiral Matrix IV
// https://leetcode.com/problems/spiral-matrix-iv/
const { ListNode, createList, toArray } = require('../../../_utils/list');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
  const matrix = Array.from({ length: m }, () => Array(n).fill(-1));
  let [row, col] = [0, 0];
  let [y, x] = [0, 1];
  while (head) {
    matrix[row][col] = head.val;
    const nextRow = matrix[row + y];
    if (!nextRow || nextRow[col + x] !== -1) {
      [y, x] = [x, -y];
    }
    row += y;
    col += x;
    head = head.next;
  }
  return matrix;
};

var m = 3,
  n = 5,
  head = createList([3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0]);
var expected = [
  [3, 0, 2, 6, 8],
  [5, 0, -1, -1, 1],
  [5, 2, 4, 9, 7],
];
var result = spiralMatrix(m, n, head);
console.log(result, result.join() === expected.join());

var m = 1,
  n = 4,
  head = createList([0, 1, 2]);
var expected = [[0, 1, 2, -1]];
var result = spiralMatrix(m, n, head);
console.log(result, result.join() === expected.join());
