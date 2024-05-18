// 1868. Product of Two Run-Length Encoded Arrays
// https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} encoded1
 * @param {number[][]} encoded2
 * @return {number[][]}
 */
var findRLEArray = function (encoded1, encoded2) {
  let index1 = 0;
  let index2 = 0;
  let offset1 = 0;
  let offset2 = 0;
  const products = [];
  while (index1 < encoded1.length || index2 < encoded2.length) {
    const product = (encoded1[index1]?.[0] ?? 1) * (encoded2[index2]?.[0] ?? 1);
    const count1 = (encoded1[index1]?.[1] ?? 0) - offset1;
    const count2 = (encoded2[index2]?.[1] ?? 0) - offset2;
    if (count1 === count2) {
      products.push([product, count1]);
      index1++;
      index2++;
      offset1 = 0;
      offset2 = 0;
    } else if (count1 < count2) {
      products.push([product, count1]);
      index1++;
      offset1 = 0;
      offset2 += count1;
    } else if (count2 < count1) {
      products.push([product, count2]);
      index2++;
      offset1 += count2;
      offset2 = 0;
    }
  }

  const result = [products[0]];
  for (let i = 1; i < products.length; i++) {
    if (result[result.length - 1][0] === products[i][0]) {
      result[result.length - 1][1] += products[i][1];
    } else {
      result.push(products[i]);
    }
  }

  return result;
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
