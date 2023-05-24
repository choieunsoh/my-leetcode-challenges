// 2700. Differences Between Two Objects
// https://leetcode.com/problems/differences-between-two-objects/
/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
var objDiff = function (obj1, obj2) {
  if (obj1 === obj2) return {};
  if (obj1 === null || obj2 === null) return [obj1, obj2];
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return [obj1, obj2];
  if (Array.isArray(obj1) !== Array.isArray(obj2)) return [obj1, obj2];

  const returnObject = {};
  for (const key in obj1) {
    if (key in obj2) {
      const subDiff = objDiff(obj1[key], obj2[key]);
      if (Object.keys(subDiff).length > 0) {
        returnObject[key] = subDiff;
      }
    }
  }
  return returnObject;
};

var obj1 = {};
obj2 = {
  a: 1,
  b: 2,
};
var expected = {};
var result = objDiff(obj1, obj2);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var obj1 = {
  a: 1,
  v: 3,
  x: [],
  z: {
    a: null,
  },
};
obj2 = {
  a: 2,
  v: 4,
  x: [],
  z: {
    a: 2,
  },
};
var expected = {
  a: [1, 2],
  v: [3, 4],
  z: {
    a: [null, 2],
  },
};
var result = objDiff(obj1, obj2);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var obj1 = {
  a: 5,
  v: 6,
  z: [1, 2, 4, [2, 5, 7]],
};
obj2 = {
  a: 5,
  v: 7,
  z: [1, 2, 3, [1]],
};
var expected = {
  v: [6, 7],
  z: {
    2: [4, 3],
    3: {
      0: [2, 1],
    },
  },
};
var result = objDiff(obj1, obj2);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var obj1 = {
  a: { b: 1 },
};
obj2 = {
  a: [5],
};
var expected = {
  a: [{ b: 1 }, [5]],
};
var result = objDiff(obj1, obj2);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var obj1 = {
  a: [1, 2, {}],
  b: false,
};
obj2 = {
  b: false,
  a: [1, 2, {}],
};
var expected = {};
var result = objDiff(obj1, obj2);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
