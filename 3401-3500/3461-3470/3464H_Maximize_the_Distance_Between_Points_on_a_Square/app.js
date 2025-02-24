// 3464. Maximize the Distance Between Points on a Square
// https://leetcode.com/problems/maximize-the-distance-between-points-on-a-square/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number} side
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var maxDistance = function (side, points, k) {
  // Split points into the 4 lines: Left, Top, Right, Bottom
  points = convertPoints(side, points);

  // Binary search for the maximum distance
  let left = 0;
  let right = side;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right; // Return the maximum valid distance

  // Function to check if a given distance `d` is valid
  function check(distance) {
    const queue = [[points[0][0], points[0][1], points[0][0], points[0][1], 1]]; // Deque: [x, y, ox, oy, ln]
    let result = 1;

    for (let i = 1; i < points.length; i++) {
      const [nx, ny] = points[i];
      let [mx, my] = [nx, ny]; // Coordinates of path starting point
      let mln = 1; // Current path length

      while (queue.length > 0) {
        const [cx, cy, ox, oy, ln] = queue[0];
        if (manhattanDistance(nx, ny, cx, cy) >= distance) {
          if (ln + 1 >= mln && manhattanDistance(nx, ny, ox, oy) >= distance) {
            // Update path length and starting point
            mln = ln + 1;
            [mx, my] = [ox, oy];
            result = Math.max(result, mln);
          }
          queue.shift(); // Remove the front of the deque
        } else {
          break; // No more points can be popped
        }
      }

      queue.push([nx, ny, mx, my, mln]); // Add current point to deque
    }

    return result >= k; // Return true if the path length is at least `k`
  }

  function manhattanDistance(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }

  function convertPoints(side, points) {
    const pts = [[], [], [], []];
    for (const [x, y] of points) {
      if (x === 0 && y !== 0) {
        pts[0].push([x, y]);
      } else if (x !== 0 && y === side) {
        pts[1].push([x, y]);
      } else if (x === side && y !== side) {
        pts[2].push([x, y]);
      } else {
        pts[3].push([x, y]);
      }
    }

    // Sort points in each line (Right and Bottom lines are sorted in reverse)
    pts[0].sort((a, b) => a[1] - b[1]); // Left line
    pts[1].sort((a, b) => a[0] - b[0]); // Top line
    pts[2].sort((a, b) => b[1] - a[1]); // Right line (reverse)
    pts[3].sort((a, b) => b[0] - a[0]); // Bottom line (reverse)

    // Recombine points in clockwise order
    points = [...pts[0], ...pts[1], ...pts[2], ...pts[3]];

    return points;
  }
};

var side = 2,
  points = [
    [0, 2],
    [2, 0],
    [2, 2],
    [0, 0],
  ],
  k = 4;
var expected = 2;
var result = maxDistance(side, points, k);
console.log(result, result == expected);

var side = 2,
  points = [
    [0, 0],
    [1, 2],
    [2, 0],
    [2, 2],
    [2, 1],
  ],
  k = 4;
var expected = 1;
var result = maxDistance(side, points, k);
console.log(result, result == expected);

var side = 2,
  points = [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2],
    [2, 0],
    [2, 2],
    [2, 1],
  ],
  k = 5;
var expected = 1;
var result = maxDistance(side, points, k);
console.log(result, result == expected);
