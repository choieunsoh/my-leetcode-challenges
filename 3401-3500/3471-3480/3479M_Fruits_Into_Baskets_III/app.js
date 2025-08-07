// 3479. Fruits Into Baskets III
// https://leetcode.com/problems/fruits-into-baskets-iii/description/
// T.C.: O(n * sqrt(n))
// S.C.: O(n)
/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
  const n = baskets.length;
  const m = Math.floor(Math.sqrt(n));
  const sections = Math.ceil(n / m);
  const maxV = new Array(sections).fill(0);
  for (let i = 0; i < n; i++) {
    const sec = Math.floor(i / m);
    maxV[sec] = Math.max(maxV[sec], baskets[i]);
  }

  let count = 0;
  for (const fruit of fruits) {
    let unset = true;
    for (let sec = 0; sec < sections; sec++) {
      if (maxV[sec] < fruit) continue;

      let choose = false;
      maxV[sec] = 0;
      for (let i = 0; i < m; i++) {
        const pos = sec * m + i;
        if (pos < n && baskets[pos] >= fruit && !choose) {
          baskets[pos] = 0;
          choose = true;
        }
        if (pos < n) {
          maxV[sec] = Math.max(maxV[sec], baskets[pos]);
        }
      }
      unset = false;
      break;
    }
    count += unset;
  }

  return count;
};

var fruits = [4, 2, 5],
  baskets = [3, 5, 4];
var expected = 1;
var result = numOfUnplacedFruits(fruits, baskets);
console.log(result, result === expected);

var fruits = [3, 6, 1],
  baskets = [6, 4, 7];
var expected = 0;
var result = numOfUnplacedFruits(fruits, baskets);
console.log(result, result === expected);
