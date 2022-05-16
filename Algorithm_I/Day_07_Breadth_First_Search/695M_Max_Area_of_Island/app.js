var maxAreaOfIsland = (grid) => {
  let max = { i: 0, j: 0, area: 0 };
  const M = grid.length;
  const N = grid[0].length;

  const getArea = (i, j, area = 0) => {
    if (grid[i][j] === 1) {
      area += 1;
      console.log("ISLAND", i, j, area);
      grid[i][j] = 2;
      // Up
      if (i - 1 >= 0) {
        area = getArea(i - 1, j, area);
      }
      // Down
      if (i + 1 < M) {
        area = getArea(i + 1, j, area);
      }
      // Left
      if (j - 1 >= 0) {
        area = getArea(i, j - 1, area);
      }
      // Right
      if (j + 1 < N) {
        area = getArea(i, j + 1, area);
      }
    }
    return area;
  };

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      const area = getArea(i, j, 0);
      if (area > max.area) {
        max = { i, j, area };
      }
    }
  }

  console.log(max);
  return max.area;
};

var grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];
console.log(maxAreaOfIsland(grid));
