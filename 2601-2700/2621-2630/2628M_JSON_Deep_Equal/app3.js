// 2628. JSON Deep Equal
// https://leetcode.com/problems/json-deep-equal/
/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
  const stringifiedO1 = JSON.stringify(o1, helper);
  const stringifiedO2 = JSON.stringify(o2, helper);
  return stringifiedO1 === stringifiedO2;

  function helper(key, value) {
    if (value && typeof value === 'object' && !Array.isArray(value))
      return Object.fromEntries(Object.entries(value).sort());
    else return value;
  }
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
