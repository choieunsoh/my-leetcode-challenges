// 2353. Design a Food Rating System
// https://leetcode.com/problems/design-a-food-rating-system/description/
// T.C.: O(n log n + m log (n + m))
// S.C.: O(m + n)
// n = foods array size
// m = number of calls
/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function (foods, cuisines, ratings) {
  const foodCuisineMap = new Map();
  const foodRatingMap = new Map();
  const data = new Map();
  for (let i = 0; i < foods.length; i++) {
    if (!data.has(cuisines[i])) {
      data.set(cuisines[i], new MaxHeap([], (a, b) => b.rating - a.rating || (a.food < b.food ? -1 : 1)));
    }
    data.get(cuisines[i]).push({ food: foods[i], rating: ratings[i] });
    foodCuisineMap.set(foods[i], cuisines[i]);
    foodRatingMap.set(foods[i], ratings[i]);
  }

  this.data = data;
  this.foodCuisineMap = foodCuisineMap;
  this.foodRatingMap = foodRatingMap;
};

/**
 * @param {string} food
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function (food, newRating) {
  this.foodRatingMap.set(food, newRating);
  const cuisine = this.foodCuisineMap.get(food);
  if (cuisine) {
    const foodHeap = this.data.get(cuisine);
    foodHeap.push({ food, rating: newRating });
  }
};

/**
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function (cuisine) {
  const foodRatingMap = this.foodRatingMap;
  const cuisineHeap = this.data.get(cuisine);
  const highestRated = cuisineHeap.peek();
  while (foodRatingMap.get(highestRated.food) !== highestRated.rating) {
    cuisineHeap.pop();
    highestRated = cuisineHeap.peek();
  }
  return highestRated.food;
};

class MaxHeap {
  constructor(data = [], compare = (a, b) => b - a) {
    this.data = data;
    this.length = this.data.length;
    this.compare = compare;

    if (this.length > 0) {
      for (let i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
    }
  }

  push(item) {
    this.data.push(item);
    this.length++;
    this._up(this.length - 1);
  }

  pop() {
    if (this.length === 0) return undefined;

    const top = this.data[0];
    const bottom = this.data.pop();
    this.length--;

    if (this.length > 0) {
      this.data[0] = bottom;
      this._down(0);
    }

    return top;
  }

  peek() {
    return this.data[0];
  }

  _up(pos) {
    const { data, compare } = this;
    const item = data[pos];

    while (pos > 0) {
      const parent = (pos - 1) >> 1;
      const current = data[parent];
      if (compare(item, current) >= 0) break;
      data[pos] = current;
      pos = parent;
    }

    data[pos] = item;
  }

  _down(pos) {
    const { data, compare } = this;
    const halfLength = this.length >> 1;
    const item = data[pos];

    while (pos < halfLength) {
      let left = (pos << 1) + 1;
      let best = data[left];
      const right = left + 1;

      if (right < this.length && compare(data[right], best) < 0) {
        left = right;
        best = data[right];
      }
      if (compare(best, item) >= 0) break;

      data[pos] = best;
      pos = left;
    }

    data[pos] = item;
  }
}

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */

function test(ops, inputs, outputs) {
  let obj = null;
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const args = inputs[i];
    const expected = outputs[i];
    let result = null;
    switch (op) {
      case 'highestRated':
        result = obj.highestRated(...args);
        break;
      case 'changeRating':
        obj.changeRating(...args);
        break;
      default:
        obj = new FoodRatings(...args);
        break;
    }
    console.log(i, op, expected, result, result === expected);
  }
}

var ops = [
    'FoodRatings',
    'highestRated',
    'highestRated',
    'changeRating',
    'highestRated',
    'changeRating',
    'highestRated',
  ],
  inputs = [
    [
      ['kimchi', 'miso', 'sushi', 'moussaka', 'ramen', 'bulgogi'],
      ['korean', 'japanese', 'japanese', 'greek', 'japanese', 'korean'],
      [9, 12, 8, 15, 14, 7],
    ],
    ['korean'],
    ['japanese'],
    ['sushi', 16],
    ['japanese'],
    ['ramen', 16],
    ['japanese'],
  ],
  outputs = [null, 'kimchi', 'ramen', null, 'sushi', null, 'ramen'];
test(ops, inputs, outputs);
