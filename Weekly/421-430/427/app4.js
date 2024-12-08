/**
 * @param {number[]} xCoord
 * @param {number[]} yCoord
 * @return {number}
 */
var maxRectangleArea = function (xCoord, yCoord) {
  const n = xCoord.length;
  const co = [];
  const sy = imap(yCoord);

  for (let i = 0; i < n; i++) {
    co.push([xCoord[i], binarySearch(sy, yCoord[i])]);
  }

  co.sort((x, y) => {
    if (x[0] !== y[0]) return x[0] - y[0];
    return x[1] - y[1];
  });

  const map = new Map();
  const mapx = new Map();
  let ans = -1;
  const ft = new Array(sy.length + 1).fill(0);

  for (let i = 0; i < co.length; i++) {
    addFenwick(ft, co[i][1], 1);

    if (i - 1 >= 0 && co[i][0] === co[i - 1][0]) {
      const yc = (BigInt(co[i][1]) << 32n) | BigInt(co[i - 1][1]);
      const aft = sumFenwick(ft, co[i][1]) - sumFenwick(ft, co[i - 1][1] - 1);

      if (map.has(yc)) {
        const bef = map.get(yc);
        if (aft === bef + 2) {
          const x = mapx.get(yc);
          const S = BigInt(co[i][0] - x) * BigInt(sy[co[i][1]] - sy[co[i - 1][1]]);
          ans = Number(BigInt(ans) > S ? ans : S);
        }
      }

      map.set(yc, aft);
      mapx.set(yc, co[i][0]);
    }
  }

  return ans;

  function sumFenwick(ft, i) {
    let sum = 0;
    for (i += 1; i > 0; i -= i & -i) {
      sum += ft[i];
    }
    return sum;
  }

  function addFenwick(ft, i, v) {
    if (v === 0 || i < 0) return;
    for (i += 1; i < ft.length; i += i & -i) {
      ft[i] += v;
    }
  }

  function imap(a) {
    const imap = Array.from(a);
    imap.sort((a, b) => a - b);
    let p = 1;

    for (let i = 1; i < imap.length; i++) {
      if (imap[i] !== imap[p - 1]) imap[p++] = imap[i];
    }

    return imap.slice(0, p);
  }

  function binarySearch(arr, val) {
    let left = 0,
      right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === val) return mid;
      if (arr[mid] < val) left = mid + 1;
      else right = mid - 1;
    }

    return -1;
  }
};

var xCoord = [1, 1, 3, 3],
  yCoord = [1, 3, 1, 3];
var expected = 4;
var result = maxRectangleArea(xCoord, yCoord);
console.log(result, result === expected);

var xCoord = [1, 1, 3, 3, 2],
  yCoord = [1, 3, 1, 3, 2];
var expected = -1;
var result = maxRectangleArea(xCoord, yCoord);
console.log(result, result === expected);

var xCoord = [1, 1, 3, 3, 1, 3],
  yCoord = [1, 3, 1, 3, 2, 2];
var expected = 2;
var result = maxRectangleArea(xCoord, yCoord);
console.log(result, result === expected);
