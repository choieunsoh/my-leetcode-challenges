// 2727. Is Object Empty
// https://leetcode.com/problems/is-object-empty
/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  for (const _ in obj) return false;
  return true;
};

var obj = { x: 5, y: 42 };
var expected = false;
var result = isEmpty(obj);
console.log(result, result === expected);

var obj = {};
var expected = true;
var result = isEmpty(obj);
console.log(result, result === expected);

var obj = [];
var expected = true;
var result = isEmpty(obj);
console.log(result, result === expected);

var obj = [null, false, 0];
var expected = false;
var result = isEmpty(obj);
console.log(result, result === expected);
