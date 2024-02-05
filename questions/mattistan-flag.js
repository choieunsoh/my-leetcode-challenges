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
  const lastIndex = size - 1;
  const mid = (size / 2) | 0;
  const borders = new Set([0, mid, lastIndex]);
  for (let row = 0; row < size; row++) {
    let line = '';
    for (let col = 0; col < size; col++) {
      const rowIsBorder = borders.has(row);
      const colIsBorder = borders.has(col);
      if (rowIsBorder && colIsBorder) {
        line += '+';
        continue;
      }

      const isDiagonal = row === col;
      if (isDiagonal) {
        line += '\\';
        continue;
      }

      const isAntiDiagonal = row + col === lastIndex;
      if (isAntiDiagonal) {
        line += '/';
        continue;
      }

      line += colIsBorder ? '|' : rowIsBorder ? '-' : ' ';
    }
    console.log(line);
  }
};

for (let i = 1; i <= 10; i++) {
  independentNationFlag(i);
}
