var orangesRotting = function (grid) {
  if (grid.length === 0) return -1;

  let minute = 0;
  const Q = [];
  const fresh = {};
  const M = grid.length;
  const N = grid[0].length;
  const visited = new Array(M).fill(0).map((x) => new Array(N).fill(false));
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] === 2) {
        Q.push({ row: i, col: j, min: minute });
      } else if (grid[i][j] === 1) {
        fresh[i * N + j] = true;
      }
    }
  }

  const valid = (r, c) =>
    r >= 0 &&
    r < M &&
    c >= 0 &&
    c < N &&
    grid[r][c] === 1 &&
    visited[r][c] === false;

  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  while (Q.length) {
    //console.log(Q);
    const { row, col, min } = Q.shift();
    minute = Math.max(minute, min);
    visited[row][col] = true;
    for (let i = 0; i < dir.length; i++) {
      const r = row + dir[i][0];
      const c = col + dir[i][1];
      if (valid(r, c)) {
        // Fresh Oranges
        visited[r][c] = true;
        grid[r][c] = 2;
        delete fresh[r * M + c];
        Q.push({ row: r, col: c, min: min + 1 });
      }
    }
  }

  return Object.keys(fresh).length > 0 ? -1 : minute;
};
var printGrid = (A) => {
  for (let i = 0; i < A.length; i++) {
    console.log(A[i].join(" "));
  }
};
var grid = [
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
];
grid = [
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
];
grid = [
  [2, 0, 0, 1, 0, 1],
  [2, 0, 0, 1, 2, 0],
];
//grid = [[0]];
console.log(orangesRotting(grid));
