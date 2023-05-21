// 2628. JSON Deep Equal
// https://leetcode.com/problems/json-deep-equal/
/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
  var objs = [[o1, o2]];

  while (objs.length) {
    [o1, o2] = objs.pop();

    if (o1 === o2) continue;
    if (typeof o1 !== 'object' || typeof o2 !== 'object') return false;
    if (Array.isArray(o1) !== Array.isArray(o2)) return false;

    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);

    if (keys1.length !== keys2.length) return false;
    for (const key of keys1) {
      if (!(key in o2)) return false;
      objs.push([o1[key], o2[key]]);
    }
  }

  return true;
};

var o1 = { x: 1, y: 2 },
  o2 = { x: 1, y: 2 };
var expected = true;
var result = areDeeplyEqual(o1, o2);
console.log(result, result === expected);

var o1 = { y: 2, x: 1 },
  o2 = { x: 1, y: 2 };
var expected = true;
var result = areDeeplyEqual(o1, o2);
console.log(result, result === expected);

var o1 = { x: null, L: [1, 2, 3] },
  o2 = { x: null, L: ['1', '2', '3'] };
var expected = false;
var result = areDeeplyEqual(o1, o2);
console.log(result, result === expected);

var o1 = true,
  o2 = false;
var expected = false;
var result = areDeeplyEqual(o1, o2);
console.log(result, result === expected);

var o1 = new Date(2023, 4, 21),
  o2 = new Date(2023, 4, 21);
var expected = true;
var result = areDeeplyEqual(o1, o2);
console.log(result, result === expected);
