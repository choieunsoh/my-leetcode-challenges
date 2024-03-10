function getMazePath(maze) {
  let queue = [[0, 0, [[0, 0]]]]; // [row, col, paths]
  const rows = maze.length;
  const cols = maze[0].length;
  const [endRow, endCol] = [rows - 1, cols - 1];

  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length) {
    const [row, col, paths] = queue.shift();
    maze[row][col] = 2;
    if (row === endRow && col === endCol) {
      for (const [r, c] of paths) {
        maze[r][c] = 'x';
      }
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (maze[i][j] === 2) maze[i][j] = 0;
        }
      }
      maze.forEach((rows) => console.log(rows.join(' ')));
      return paths;
    }

    for (const [dr, dc] of dir) {
      const [nextRow, nextCol] = [row + dr, col + dc];
      if (!isValidPosition(nextRow, nextCol)) continue;
      queue.push([nextRow, nextCol, [...paths, [nextRow, nextCol]]]);
    }
  }

  function isValidPosition(row, col) {
    return row >= 0 && row < rows && col >= 0 && col < cols && maze[row][col] === 0;
  }

  return [];
}

var maze = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];
console.log(getMazePath(maze));

var maze = [
  [0, 0, 0, 0, 0],
  [1, 1, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
];
console.log(getMazePath(maze));
