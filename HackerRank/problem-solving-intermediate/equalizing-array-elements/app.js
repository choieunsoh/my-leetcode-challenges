// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @param {number} threshold
 * @param {number} d
 * @return {number}
 */
function minOperations(arr, threshold, d) {
  // Create a map to store the frequency and operations needed for each value
  const map = new Map();

  // Function to calculate and store operations for a value
  function addToMap(value, ops) {
    if (!map.has(value)) {
      map.set(value, { freq: 1, ops: ops });
    } else {
      const entry = map.get(value);
      entry.freq++;
      entry.ops += ops;
    }
  }

  // Process each number in the array
  for (let num of arr) {
    let ops = 0;
    addToMap(num, ops);
    while (num > 0) {
      num = (num / d) | 0;
      ops++;
      addToMap(num, ops);
    }
  }

  // Find the minimum operations to reach the threshold
  let minOps = Infinity;
  for (const [, data] of map) {
    if (data.freq >= threshold) {
      minOps = Math.min(minOps, data.ops);
    }
  }
  return minOps;
}

var arr = [1, 2, 3, 4, 5],
  threshold = 3,
  d = 2;
var expected = 2;
var result = minOperations(arr, threshold, d);
console.log(result, result === expected);

var arr = [64, 30, 25, 33],
  threshold = 2,
  d = 2;
var expected = 3;
var result = minOperations(arr, threshold, d);
console.log(result, result === expected);

var arr = [1, 2, 3, 4],
  threshold = 4,
  d = 3;
var expected = 6;
var result = minOperations(arr, threshold, d);
console.log(result, result === expected);
