// groupingDishes
/**
 * @param {string[][]} dishes
 * @return {string[][]}
 */
function groupingDishes(dishes) {
  const map = new Map();
  for (const [dish, ...ingredients] of dishes) {
    for (const ingredient of ingredients) {
      if (map.has(ingredient)) {
        map.get(ingredient).push(dish);
      } else {
        map.set(ingredient, [dish]);
      }
    }
  }

  const result = [];
  const ingredients = [...map.keys()].sort();
  for (const ingredient of ingredients) {
    const allDishes = map.get(ingredient);
    if (allDishes.length === 1) continue;
    allDishes.sort();
    result.push([ingredient, ...allDishes]);
  }

  return result;
}

var dishes = [
  ['Salad', 'Tomato', 'Cucumber', 'Salad', 'Sauce'],
  ['Pizza', 'Tomato', 'Sausage', 'Sauce', 'Dough'],
  ['Quesadilla', 'Chicken', 'Cheese', 'Sauce'],
  ['Sandwich', 'Salad', 'Bread', 'Tomato', 'Cheese'],
];
var expected = [
  ['Cheese', 'Quesadilla', 'Sandwich'],
  ['Salad', 'Salad', 'Sandwich'],
  ['Sauce', 'Pizza', 'Quesadilla', 'Salad'],
  ['Tomato', 'Pizza', 'Salad', 'Sandwich'],
];
var result = groupingDishes(dishes);
console.log(result, result.join() === expected.join());

var dishes = [
  ['Pasta', 'Tomato Sauce', 'Onions', 'Garlic'],
  ['Chicken Curry', 'Chicken', 'Curry Sauce'],
  ['Fried Rice', 'Rice', 'Onions', 'Nuts'],
  ['Salad', 'Spinach', 'Nuts'],
  ['Sandwich', 'Cheese', 'Bread'],
  ['Quesadilla', 'Chicken', 'Cheese'],
];
var expected = [
  ['Cheese', 'Quesadilla', 'Sandwich'],
  ['Chicken', 'Chicken Curry', 'Quesadilla'],
  ['Nuts', 'Fried Rice', 'Salad'],
  ['Onions', 'Fried Rice', 'Pasta'],
];
var result = groupingDishes(dishes);
console.log(result, result.join() === expected.join());
