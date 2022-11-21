// 986. Interval List Intersections
// https://leetcode.com/problems/interval-list-intersections/description/
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  const result = [];
  if (firstList.length === 0 || secondList.length === 0) return result;

  let firstIndex = 0;
  let secondIndex = 0;
  while (firstIndex < firstList.length && secondIndex < secondList.length) {
    const [x1, y1] = firstList[firstIndex];
    const [x2, y2] = secondList[secondIndex];
    const start = Math.max(x1, x2);
    const end = Math.min(y1, y2);
    if (start <= end) result.push([start, end]);
    if (end === y1) firstIndex++;
    if (end === y2) secondIndex++;
  }

  return result;
};

var firstList = [
    [0, 2],
    [5, 10],
    [13, 23],
    [24, 25],
  ],
  secondList = [
    [1, 5],
    [8, 12],
    [15, 24],
    [25, 26],
  ];
var expected = [
  [1, 2],
  [5, 5],
  [8, 10],
  [15, 23],
  [24, 24],
  [25, 25],
];
var result = intervalIntersection(firstList, secondList);
console.log(result, result.join() === expected.join());

var firstList = [
    [1, 3],
    [5, 9],
  ],
  secondList = [];
var expected = [];
var result = intervalIntersection(firstList, secondList);
console.log(result, result.join() === expected.join());

var firstList = [
  [0, 2],
  [5, 10],
  [13, 23],
  [24, 25],
];
var secondList = [
  [1, 5],
  [8, 12],
  [15, 24],
  [25, 26],
];
var expected = [
  [1, 2],
  [5, 5],
  [8, 10],
  [15, 23],
  [24, 24],
  [25, 25],
];
var result = intervalIntersection(firstList, secondList);
console.log(result, result.join() === expected.join());
