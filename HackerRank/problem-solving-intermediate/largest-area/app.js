// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number} w
 * @param {number} h
 * @param {number[]} isVertical
 * @param {number[]} distance
 * @return {number[]}
 */
function getMaxArea(w, h, isVertical, distance) {
  const result = [];
  const horizontalCuts = [];
  const verticalCuts = [];
  const n = isVertical.length;
  for (let i = 0; i < n; i++) {
    if (isVertical[i] === 0) {
      insertSorted(horizontalCuts, distance[i]);
    } else {
      insertSorted(verticalCuts, distance[i]);
    }

    const maxHeight = getMaxSegments(h, horizontalCuts);
    const maxWidth = getMaxSegments(w, verticalCuts);
    const maxArea = maxHeight * maxWidth;
    result.push(maxArea);
  }

  return result;

  function getMaxSegments(totalLength, cuts) {
    if (cuts.length === 0) return totalLength;

    let maxSegment = cuts[0];
    for (let i = 1; i < cuts.length; i++) {
      maxSegment = Math.max(maxSegment, cuts[i] - cuts[i - 1]);
    }
    maxSegment = Math.max(maxSegment, totalLength - cuts[cuts.length - 1]);

    return maxSegment;
  }

  function insertSorted(array, value) {
    const index = binarySearch(array, value);
    if (index < 0) {
      array.splice(~index, 0, value);
    }
  }

  function binarySearch(array, value) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (array[mid] === value) return mid;
      if (array[mid] > value) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return ~left;
  }
}

var w = 4,
  h = 4,
  isVertical = [0, 1],
  distance = [3, 1];
var expected = [12, 9];
var result = getMaxArea(w, h, isVertical, distance);
console.log(result, result.join() === expected.join());

var w = 2,
  h = 2,
  isVertical = [0, 1],
  distance = [1, 1];
var expected = [2, 1];
var result = getMaxArea(w, h, isVertical, distance);
console.log(result, result.join() === expected.join());

var w = 4,
  h = 3,
  isVertical = [1, 1],
  distance = [1, 3];
var expected = [9, 6];
var result = getMaxArea(w, h, isVertical, distance);
console.log(result, result.join() === expected.join());

var w = 4,
  h = 3,
  isVertical = [1, 1, 1],
  distance = [1, 3, 2];
var expected = [9, 6, 3];
var result = getMaxArea(w, h, isVertical, distance);
console.log(result, result.join() === expected.join());

var w = 4,
  h = 3,
  isVertical = [1, 1, 1, 1],
  distance = [1, 3, 2, 1];
var expected = [9, 6, 3, 3];
var result = getMaxArea(w, h, isVertical, distance);
console.log(result, result.join() === expected.join());
