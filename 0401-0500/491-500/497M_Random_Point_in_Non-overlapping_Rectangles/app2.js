// 497. Random Point in Non-overlapping Rectangles
// https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[][]} rects
 */
var Solution = function (rects) {
  // Imagine we put the boxes into a 2D pool and pick one. Then the bigger box will more likely to be seen and picked
  // So first we initialize the pool with the area of the boxes
  let totalArea = 0;
  this.boxes = rects.map(([x1, y1, x2, y2], index) => {
    const area = (x2 - x1 + 1) * (y2 - y1 + 1);
    totalArea += area;
    return { area, index, x1, y1, x2, y2 };
  });

  // Alias method says that, for example you have n boxes, and n rooms with can contain exactly the average area of the boxes,
  // you can distribute the content of the boxes into the rooms such that each room contains only content of 2 type of boxes.
  // So the idea is putting each box into each room. Then some box will be larger than the room, and some will be smaller
  // You can then split the larger box and put into the room which contains the smaller box
  // So now let's classify the boxes base on if it's larger or smaller than the room size
  const avgArea = (this.avg = totalArea / rects.length);
  const smallerBoxes = this.boxes.filter((box) => box.area < avgArea);
  const largerBoxes = this.boxes.filter((box) => box.area > avgArea);
  while (smallerBoxes.length !== 0 && largerBoxes.length !== 0) {
    const smaller = smallerBoxes.shift();
    const larger = largerBoxes[0];
    smaller.added = larger.index;
    larger.area -= avgArea - smaller.area;
    // After splitting the larger box, calling A for example, and put into the room of the smaller box, that room is now full, and we no longer care about it
    // About the box A, if it is now still bigger than the room capacity, keep it in the "largers" stack to work with later
    // If it is now fit into its room, forget about it
    // If it becomes smaller for a typical room, we put it into the "smallers" stack to find it a new "larger boxie"
    if (larger.area <= avgArea) {
      largerBoxes.shift();
      if (larger.area < avgArea) {
        smallerBoxes[smallerBoxes.length] = larger;
      }
    }
  }
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function () {
  // Now we just need to pick a random room
  const index = (Math.random() * this.boxes.length) | 0;
  const box = this.boxes[index];
  // And then pick 1 of the 2 boxes in that room, based on their area as above
  const { x1, y1, x2, y2 } = Math.random() * this.avg > box.area ? this.boxes[box.added] : box;
  // Finally return a point inside that box
  return [Math.floor(x1 + Math.random() * (x2 - x1 + 1)), Math.floor(y1 + Math.random() * (y2 - y1 + 1))];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */

var ops = ['Solution', 'pick', 'pick', 'pick', 'pick', 'pick'],
  inputs = [
    [
      [
        [-2, -2, 1, 1],
        [2, 2, 4, 6],
      ],
    ],
    [],
    [],
    [],
    [],
    [],
  ],
  outputs = [null, [1, -2], [1, -1], [-1, -2], [-2, -2], [0, 0]];
test(ops, inputs, outputs);

function test(ops, inputs, outputs) {
  let obj = null;
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const input = inputs[i];
    const expected = outputs[i] ?? [];
    let result = [];
    if (op === 'pick') {
      result = obj.pick();
    } else {
      obj = new Solution(input[0]);
    }
    console.log(i, op, result, result.join() === expected.join());
  }
}
