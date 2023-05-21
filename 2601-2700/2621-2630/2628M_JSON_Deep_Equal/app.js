// 2628. JSON Deep Equal
// https://leetcode.com/problems/json-deep-equal/
/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
  if (o1 === o2) return true;
  if (o1 === null || o2 === null) return false;
  if (String(o1) !== String(o2)) return false;

  if (typeof o1 !== 'object') {
    return o1 === o2;
  }

  if (Array.isArray(o1)) {
    if (o1.length !== o2.length) return false;

    for (let i = 0; i < o1.length; i++) {
      if (!areDeeplyEqual(o1[i], o2[i])) return false;
    }

    return true;
  }

  if (Object.keys(o1).length !== Object.keys(o2).length) return false;

  for (const key in o1) {
    if (!areDeeplyEqual(o1[key], o2[key])) return false;
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
