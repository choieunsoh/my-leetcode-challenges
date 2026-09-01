// 3568. Minimum Moves to Clean the Classroom
// https://leetcode.com/problems/minimum-moves-to-clean-the-classroom/description/
// T.C.: O(m*n*2^L*E)
// S.C.: O(m*n*2^L*E)
/**
 * @param {string[]} classroom
 * @param {number} energy
 * @return {number}
 */
var minMoves = function (classroom, energy) {
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const m = classroom.length;
  const n = classroom[0].length;

  const idx = new Array(400).fill(-1);
  const seen = new Array(409600).fill(-1);

  let lit = 0;
  let sr = 0;
  let sc = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const x = classroom[i][j];
      const L = x === 'L';
      const S = x === 'S';

      idx[i * 20 + j] = L * lit + (1 - L) * -1;
      lit += L;

      sr = S * i + (1 - S) * sr;
      sc = S * j + (1 - S) * sc;
    }
  }

  const goal = (1 << lit) - 1;
  const q = [[sr, sc, 0, energy, 0]];

  seen[(sr * 20 + sc) << 10] = energy;

  for (const [r, c, cur, e, step] of q) {
    if (cur === goal) return step;

    for (const [dr, dc] of dirs) {
      const u = r + dr;
      const v = c + dc;
      const x = classroom[u]?.[v];

      if (!x || x === 'X') continue;

      let rem = e - 1;
      if (rem < 0) continue;

      const R = x === 'R';
      const L = x === 'L';

      rem = R * energy + (1 - R) * rem;

      const shift = L * idx[u * 20 + v];
      const next = cur | (L * (1 << shift));

      const hash = ((u * 20 + v) << 10) | next;
      if (rem > seen[hash]) {
        seen[hash] = rem;
        q.push([u, v, next, rem, step + 1]);
      }
    }
  }

  return -1;
};

var classroom = ['S.', 'XL'],
  energy = 2;
var expected = 2;
var result = minMoves(classroom, energy);
console.log(result, result === expected);

var classroom = ['LS', 'RL'],
  energy = 4;
var expected = 3;
var result = minMoves(classroom, energy);
console.log(result, result === expected);

var classroom = ['L.S', 'RXL'],
  energy = 3;
var expected = -1;
var result = minMoves(classroom, energy);
console.log(result, result === expected);
