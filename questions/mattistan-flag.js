/**
 * Prints a ASCII characters flag of size `n`
 * ```
 * +--+--+
 * |\ | /|
 * | \|/ |
 * +--+--+
 * | /|\ |
 * |/ | \|
 * +--+--+
 * ```
 * @param {Number} n size of the flag
 */
var independentNationFlag = function (n) {
  const size = n * 2 + 3;
  const mid = (size / 2) | 0;
  const borders = [0, mid, size - 1];
  for (let i = 0; i < size; i++) {
    let line = '';
    for (let j = 0; j < size; j++) {
      if (borders.includes(i) && borders.includes(j)) {
        line += '+';
        continue;
      }

      if (i === j) {
        line += '\\';
        continue;
      }

      if (size - 1 === i + j) {
        line += '/';
        continue;
      }

      line += borders.includes(j) ? '|' : borders.includes(i) ? '-' : ' ';
    }
    console.log(line);
  }
};

for (let i = 1; i <= 10; i++) {
  independentNationFlag(i);
}
