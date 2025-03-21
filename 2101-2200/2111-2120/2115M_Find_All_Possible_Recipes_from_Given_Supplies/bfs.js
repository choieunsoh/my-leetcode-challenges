// 2115. Find All Possible Recipes from Given Supplies
// https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/
// Array, Hash Table, String, Graph, Topological Sort
// T.C.: O(n*m+s)
// S.C.: O(n+s)
/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
  // Track available ingredients and recipes
  const available = new Set(supplies);

  // Queue to process recipe indices
  let recipeQueue = [...recipes.keys()];

  const createdRecipes = [];
  let lastSize = -1;

  // Continue while we keep finding new recipes
  while (available.size > lastSize) {
    lastSize = available.size;
    const newRecipeQueue = [];

    // Process all recipes in current queue
    for (const recipeIdx of recipeQueue) {
      let canCreate = true;

      // Check if all ingredients are available
      for (const ingredient of ingredients[recipeIdx]) {
        if (!available.has(ingredient)) {
          canCreate = false;
          break;
        }
      }

      if (!canCreate) {
        newRecipeQueue.push(recipeIdx);
      } else {
        // Recipe can be created - add to available items
        available.add(recipes[recipeIdx]);
        createdRecipes.push(recipes[recipeIdx]);
      }
    }

    // Update queue for next iteration
    recipeQueue = newRecipeQueue;
  }

  return createdRecipes;
};

var recipes = ['bread'],
  ingredients = [['yeast', 'flour']],
  supplies = ['yeast', 'flour', 'corn'];
var expected = ['bread'];
var result = findAllRecipes(recipes, ingredients, supplies);
console.log(result, result.join() === expected.join());

var recipes = ['bread', 'sandwich'],
  ingredients = [
    ['yeast', 'flour'],
    ['bread', 'meat'],
  ],
  supplies = ['yeast', 'flour', 'meat'];
var expected = ['bread', 'sandwich'];
var result = findAllRecipes(recipes, ingredients, supplies);
console.log(result, result.join() === expected.join());

var recipes = ['bread', 'sandwich', 'burger'],
  ingredients = [
    ['yeast', 'flour'],
    ['bread', 'meat'],
    ['sandwich', 'meat', 'bread'],
  ],
  supplies = ['yeast', 'flour', 'meat'];
var expected = ['bread', 'sandwich', 'burger'];
var result = findAllRecipes(recipes, ingredients, supplies);
console.log(result, result.join() === expected.join());
