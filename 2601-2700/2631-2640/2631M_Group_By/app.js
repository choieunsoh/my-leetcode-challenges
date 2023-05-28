// 2631. Group By
// https://leetcode.com/problems/group-by/
/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
  const result = {};
  for (const item of this) {
    const key = fn.call(this, item);
    const list = result[key] ?? [];
    list.push(item);
    result[key] = list;
  }
  return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

var array = [{ id: '1' }, { id: '1' }, { id: '2' }],
  fn = function (item) {
    return item.id;
  };
var expected = {
  1: [{ id: '1' }, { id: '1' }],
  2: [{ id: '2' }],
};
var result = array.groupBy(fn);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var array = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9],
];
fn = function (list) {
  return String(list[0]);
};
var expected = {
  1: [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9],
  ],
};
var result = array.groupBy(fn);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
fn = function (n) {
  return String(n > 5);
};
var expected = {
  false: [1, 2, 3, 4, 5],
  true: [6, 7, 8, 9, 10],
};
var result = array.groupBy(fn);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
