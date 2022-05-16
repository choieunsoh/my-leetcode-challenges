const updateMatrix1 = (mat) => {
  if (mat.length === 0) return [];
  const M = mat.length;
  const N = mat[0].length;
  const visited = new Array(M).fill(0).map((x) => new Array(N).fill(false));
  const Q = [];

  const zeroFound = (i, j) => {
    //if (visited[i][j] === true) return false;
    if (i - 1 >= 0 && mat[i - 1][j] === 0) return true;
    if (i + 1 < M && mat[i + 1][j] === 0) return true;
    if (j - 1 >= 0 && mat[i][j - 1] === 0) return true;
    if (j + 1 < N && mat[i][j + 1] === 0) return true;
    return false;
  };
  const minValue = (i, j) => {
    let U = Number.MAX_VALUE;
    if (i - 1 >= 0 && visited[i - 1][j]) U = mat[i - 1][j];
    let D = Number.MAX_VALUE;
    if (i + 1 < M && visited[i + 1][j]) D = mat[i + 1][j];
    let L = Number.MAX_VALUE;
    if (j - 1 >= 0 && visited[i][j - 1]) L = mat[i][j - 1];
    let R = Number.MAX_VALUE;
    if (j + 1 < N && visited[i][j + 1]) R = mat[i][j + 1];
    let x = Math.min(D, U, L, R);
    if (x === Number.MAX_VALUE) return 0;
    return x;
  };
  const addQ = (i, j, di = "D") => {
    if (i < 0 || i > M - 1 || j < 0 || j > N - 1) return;
    if (visited[i][j] === false && mat[i][j] === 1) {
      const zero = zeroFound(i, j);
      if (zero === false) {
        mat[i][j] += 1;
      } else {
        visited[i][j] = true;
      }
      Q.push([i, j]);
      //console.log(di, [i, j], zero, Q.join(" "));

      addQ(i, j + 1, "R");
      addQ(i + 1, j, "D");
      addQ(i, j - 1, "L");
      addQ(i - 1, j, "U");
    }
  };

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      addQ(i, j, "S");
    }
  }

  while (Q.length) {
    const [i, j] = Q.pop();
    if (visited[i][j] === false) {
      visited[i][j] = true;
      const x = minValue(i, j) + 1;
      mat[i][j] = x;
    }
  }

  return mat;
};
const updateMatrix = (mat) => {
  if (mat.length === 0) return [];
  const M = mat.length;
  const N = mat[0].length;
  const D = new Array(M).fill(0).map((x) => new Array(N).fill(0));
  const visited = new Array(M).fill(0).map((x) => new Array(N).fill(false));
  const Q = [];

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (mat[i][j] === 0) {
        Q.push({ row: i, col: j, dist: 0 });
      }
    }
  }
  const isOK = (r, c) =>
    r >= 0 &&
    r < M &&
    c >= 0 &&
    c < N &&
    visited[r][c] === false &&
    mat[r][c] > 0;

  const updateDist = (row, col, i, j, dist, dir) => {
    const r = row + i;
    const c = col + j;
    if (isOK(r, c)) {
      visited[r][c] = true;
      D[r][c] = dist + 1;
      Q.push({ row: r, col: c, dist: dist + 1 });
    }
  };

  while (Q.length) {
    const { row, col, dist } = Q.shift();
    visited[row][col] = true;

    updateDist(row, col, -1, 0, dist, "U");
    updateDist(row, col, 1, 0, dist, "D");
    updateDist(row, col, 0, -1, dist, "L");
    updateDist(row, col, 0, 1, dist, "R");
  }

  return D;
};
const printMat = (A, B) => {
  for (let i = 0; i < A.length; i++) {
    console.log(A[i].join(" "));
    if (B) {
      console.log(B[i].join(" "));
      console.log("");
    }
  }
};
var mat = [
  [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
  [1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
  [0, 1, 0, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
];
var result = [
  [2, 1, 0, 0, 1, 0, 0, 1, 1, 0],
  [1, 0, 0, 1, 0, 1, 1, 2, 2, 1],
  [1, 1, 1, 0, 0, 1, 2, 2, 1, 0],
  [0, 1, 2, 1, 0, 1, 2, 3, 2, 1],
  [0, 0, 1, 2, 1, 2, 1, 2, 1, 0],
  [1, 1, 2, 3, 2, 1, 0, 1, 1, 1],
  [0, 1, 2, 3, 2, 1, 1, 0, 0, 1],
  [1, 2, 1, 2, 1, 0, 0, 1, 1, 2],
  [0, 1, 0, 1, 1, 0, 1, 2, 2, 3],
  [1, 2, 1, 0, 1, 0, 1, 2, 3, 4],
];
//console.log(printMat(mat));
console.log(printMat(updateMatrix(mat)));
//console.log(printMat(updateMatrix(mat), result));
