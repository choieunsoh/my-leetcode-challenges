// 2075. Decode the Slanted Ciphertext
// https://leetcode.com/problems/decode-the-slanted-ciphertext/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function (encodedText, rows) {
  if (rows === 1) return encodedText;

  const n = encodedText.length;
  const cols = (n / rows) | 0;
  const result = [];

  for (let col = 0; col < cols; col++) {
    let row = 0;
    let j = col;
    while (row < rows && j < cols) {
      result.push(encodedText[row * cols + j]);
      row++;
      j++;
    }
  }

  return result.join('').replace(/\s+$/, '');
};

var encodedText = 'ch   ie   pr',
  rows = 3;
var expected = 'cipher';
var result = decodeCiphertext(encodedText, rows);
console.log(result, result === expected);

var encodedText = 'iveo    eed   l te   olc',
  rows = 4;
var expected = 'i love leetcode';
var result = decodeCiphertext(encodedText, rows);
console.log(result, result === expected);

var encodedText = 'coding',
  rows = 1;
var expected = 'coding';
var result = decodeCiphertext(encodedText, rows);
console.log(result, result === expected);
