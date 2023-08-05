// 2722. Join Two Arrays by ID
// https://leetcode.com/problems/join-two-arrays-by-id
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  arr1.sort((a, b) => a.id - b.id);
  arr2.sort((a, b) => a.id - b.id);

  let i = 0;
  let j = 0;
  const result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i].id === arr2[j].id) {
      result.push({ ...arr1[i++], ...arr2[j++] });
      continue;
    }

    if (arr1[i].id < arr2[j].id) {
      result.push({ ...arr1[i++] });
      continue;
    }

    result.push({ ...arr2[j++] });
  }

  while (i < arr1.length) {
    result.push({ ...arr1[i++] });
  }

  while (j < arr2.length) {
    result.push({ ...arr2[j++] });
  }

  return result;
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
