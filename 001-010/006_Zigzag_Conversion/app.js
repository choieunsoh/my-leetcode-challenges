const convert = (s, numRows) => {
  return convert2(s, numRows);
};

const convert1 = (s, numRows) => {
  const len = s.length;
  if (len <= numRows || numRows === 1) return s;

  const n = numRows;
  const m = 2 * n - 2;
  const group = Math.ceil(len / m);
  let result = [];
  let k = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < group; j++) {
      let x = i + m * j;
      if (x < len) {
        console.log(i, j, k, x, s[x]);
        result[k] = s[x];
      }

      if (i > 0 && i < n - 1) {
        let h = (j + 1) * m - i;
        if (h < len) {
          k++;
          console.log(i, j, k, h, s[h]);
          result[k] = s[h];
        }
      }
      k++;
    }
  }
  return result.join("");
};

const convert2 = (s, numRows) => {
  const len = s.length;
  if (len <= numRows || numRows === 1) return s;

  let result = [];
  let line = 2 * numRows - 2;
  let row = 0;
  for (let i = 0; i < len; i++) {
    result[row] = (result[row] || "") + s[i];
    let x = i % line;
    if (x < numRows - 1) {
      row++;
    } else {
      row--;
    }
  }

  return result.join("");
};

let s = "PAYPALISHIRING";
let numRows = 3;
let expected = "PAHNAPLSIIGYIR";
let result = convert(s, numRows);
console.log(expected);
console.log(result, expected === result, numRows);

s = "PAYPALISHIRING";
numRows = 4;
expected = "PINALSIGYAHRPI";
result = convert(s, numRows);
console.log(expected);
console.log(result, expected === result, numRows);

s = "ABCDEF";
numRows = 6;
expected = "ABCDEF";
result = convert(s, numRows);
console.log(expected);
console.log(result, expected === result, numRows);
