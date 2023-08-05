// 2722. Join Two Arrays by ID
// https://leetcode.com/problems/join-two-arrays-by-id
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const map = new Map();
  for (const obj of arr1) {
    map.set(obj.id, obj);
  }
  for (const obj of arr2) {
    if (!map.has(obj.id)) {
      map.set(obj.id, obj);
    } else {
      const prevObj = map.get(obj.id);
      for (const key of Object.keys(obj)) {
        prevObj[key] = obj[key];
      }
    }
  }
  const result = new Array();
  for (const key of map.keys()) {
    result.push(map.get(key));
  }
  return result.sort((a, b) => a.id - b.id);
};

var arr1 = [
    { id: 1, x: 1 },
    { id: 2, x: 9 },
  ],
  arr2 = [{ id: 3, x: 5 }];
var expected = [
  { id: 1, x: 1 },
  { id: 2, x: 9 },
  { id: 3, x: 5 },
];
var result = join(arr1, arr2);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var arr1 = [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 },
  ],
  arr2 = [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 },
  ];
var expected = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];
var result = join(arr1, arr2);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],
  arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
var expected = [{ id: 1, b: { c: 84 }, v: [1, 3], y: 48 }];
var result = join(arr1, arr2);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
