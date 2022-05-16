var floodFill = (image, sr, sc, newColor) => {
  const M = image.length;
  const N = image[0].length;

  let visited = new Array(M).fill(0).map((x) => new Array(N).fill(false));
  let queue = [];

  const color = image[sr][sc];
  image[sr][sc] = newColor;
  visited[sr][sc] = true;
  queue.push([sr, sc]);

  const addLast = (r, c) => {
    if (visited[r][c] === false && image[r][c] === color) {
      image[r][c] = newColor;
      visited[r][c] = true;
      queue.push([r, c]);
      //console.log("Add", r, c);
    }
  };

  let counter = 0;
  while (queue.length > 0) {
    const [r, c] = queue.shift();
    console.log("Round", counter++, r, c, queue);

    // Down
    if (r - 1 >= 0) {
      addLast(r - 1, c);
    }
    // Up
    if (r + 1 < M) {
      addLast(r + 1, c);
    }
    // Left
    if (c - 1 >= 0) {
      addLast(r, c - 1);
    }
    // Right
    if (c + 1 < N) {
      addLast(r, c + 1);
    }

    console.log(queue);
  }

  return image;
};

var image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  sr = 1,
  sc = 1,
  newColor = 2;
var result = floodFill(image, sr, sc, newColor);
console.log(result);
