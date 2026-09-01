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
  const m = classroom.length;
  const n = classroom[0].length;
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let startR = -1,
    startC = -1;
  let litterCount = 0;

  // Use Int8Array for memory efficiency
  const litterIdx = new Int8Array(m * n).fill(-1);

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      const cell = classroom[r][c];
      if (cell === 'S') {
        startR = r;
        startC = c;
      } else if (cell === 'L') {
        litterIdx[r * n + c] = litterCount++;
      }
    }
  }

  const goalMask = (1 << litterCount) - 1;

  // Max grid size is 20x20 = 400. 400 * 1024 (for 10-bit mask) = 409600.
  // Int8Array is perfect since max energy is 50 (fits in 8-bit signed integer).
  const seen = new Int8Array(409600).fill(-1);

  const startHash = (startR * n + startC) << 10;
  seen[startHash] = energy;

  // Queue stores: [row, col, mask, energy, steps]
  const q = [[startR, startC, 0, energy, 0]];

  // Using for...of on an array acts as an efficient queue without O(N) shift() overhead
  for (const [r, c, mask, e, steps] of q) {
    if (mask === goalMask) return steps;

    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;

      if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;

      const cell = classroom[nr][nc];
      if (cell === 'X') continue;

      let nextE = e - 1;
      if (nextE < 0) continue;

      // Standard conditionals for better readability
      if (cell === 'R') {
        nextE = energy;
      }

      let nextMask = mask;
      if (cell === 'L') {
        nextMask |= 1 << litterIdx[nr * n + nc];
      }

      const hash = ((nr * n + nc) << 10) | nextMask;
      if (nextE > seen[hash]) {
        seen[hash] = nextE;
        q.push([nr, nc, nextMask, nextE, steps + 1]);
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
