// 1868. Product of Two Run-Length Encoded Arrays
// https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[][]} encoded1
 * @param {number[][]} encoded2
 * @return {number[][]}
 */
var findRLEArray = function (encoded1, encoded2) {
  const result = [];
  const n1 = encoded1.length;
  const n2 = encoded2.length;
  let i = 0;
  let j = 0;
  let num1 = 0;
  let num2 = 0;
  let count1 = 0;
  let count2 = 0;
  while (i < n1 && j < n2) {
    if (count1 === 0) [num1, count1] = encoded1[i];
    if (count2 === 0) [num2, count2] = encoded2[j];
    const num = num1 * num2;
    if (count1 < count2) {
      append(num, count1);
      count2 -= count1;
      count1 = 0;
      i++;
    } else if (count2 < count1) {
      append(num, count2);
      count1 -= count2;
      count2 = 0;
      j++;
    } else {
      append(num, count1);
      count1 = 0;
      count2 = 0;
      i++;
      j++;
    }
  }

  return result;

  function append(num, count) {
    if (result.length === 0) {
      result.push([num, count]);
      return;
    }

    const prevNum = result[result.length - 1][0];
    if (prevNum === num) {
      result[result.length - 1][1] += count;
    } else {
      result.push([num, count]);
    }
  }
};

var encoded1 = [
    [1, 3],
    [2, 3],
  ],
  encoded2 = [
    [6, 3],
    [3, 3],
  ];
var expected = [[6, 6]];
var result = findRLEArray(encoded1, encoded2);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var encoded1 = [
    [1, 3],
    [2, 1],
    [3, 2],
  ],
  encoded2 = [
    [2, 3],
    [3, 3],
  ];
var expected = [
  [2, 3],
  [6, 1],
  [9, 2],
];
var result = findRLEArray(encoded1, encoded2);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var encoded1 = [
    [2, 3],
    [3, 3],
  ],
  encoded2 = [
    [1, 3],
    [2, 1],
    [3, 2],
  ];
var expected = [
  [2, 3],
  [6, 1],
  [9, 2],
];
var result = findRLEArray(encoded1, encoded2);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var encoded1 = [
    [3, 3],
    [2, 3],
  ],
  encoded2 = [
    [2, 1],
    [3, 2],
    [1, 3],
  ];
var expected = [
  [6, 1],
  [9, 2],
  [2, 3],
];
var result = findRLEArray(encoded1, encoded2);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var encoded1 = [
    [2, 2],
    [5, 5],
    [1, 5],
    [2, 5],
    [4, 2],
    [5, 3],
    [1, 2],
    [4, 3],
    [3, 2],
    [2, 3],
  ],
  encoded2 = [
    [1, 1],
    [4, 1],
    [3, 3],
    [5, 3],
    [1, 4],
    [5, 1],
    [4, 1],
    [5, 3],
    [3, 5],
    [2, 1],
    [1, 2],
    [3, 1],
    [2, 1],
    [4, 3],
    [3, 1],
    [2, 1],
  ];
var expected = [
  [2, 1],
  [8, 1],
  [15, 3],
  [25, 2],
  [5, 1],
  [1, 4],
  [10, 1],
  [8, 1],
  [10, 3],
  [12, 2],
  [15, 3],
  [2, 1],
  [1, 1],
  [4, 1],
  [12, 1],
  [8, 1],
  [12, 2],
  [8, 1],
  [6, 1],
  [4, 1],
];
var result = findRLEArray(encoded1, encoded2);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
