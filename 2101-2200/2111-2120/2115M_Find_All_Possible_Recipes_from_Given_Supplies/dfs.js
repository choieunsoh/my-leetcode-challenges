// 2115. Find All Possible Recipes from Given Supplies
// https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/
// Array, Hash Table, String, Graph, Topological Sort
// T.C.: O(n+m+s)
// S.C.: O(n+m)
/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
  const possibleRecipes = [];
  // Track if ingredient/recipe can be made
  const canMake = new Map();
  // Map recipe name to its index in ingredients list
  const recipeToIndex = new Map();

  // Mark all initial supplies as available
  for (const supply of supplies) {
    canMake.set(supply, true);
  }

  // Create recipe to index mapping
  for (let idx = 0; idx < recipes.length; idx++) {
    recipeToIndex.set(recipes[idx], idx);
  }

  // Try to make each recipe using DFS
  for (const recipe of recipes) {
    checkRecipe(recipe, new Set());
    if (canMake.has(recipe)) {
      possibleRecipes.push(recipe);
    }
  }

  return possibleRecipes;

  function checkRecipe(recipe, visited) {
    // Return if we already know if recipe can be made
    if (canMake.get(recipe)) {
      return;
    }

    // Not a valid recipe or cycle detected
    if (!recipeToIndex.has(recipe) || visited.has(recipe)) {
      canMake.set(recipe, false);
      return;
    }

    visited.add(recipe);

    // Check if we can make all required ingredients
    const neededIngredients = ingredients[recipeToIndex.get(recipe)];
    for (const ingredient of neededIngredients) {
      checkRecipe(ingredient, visited);
      if (!canMake.has(ingredient)) {
        canMake.set(recipe, false);
        return;
      }
    }

    // All ingredients can be made
    canMake.set(recipe, true);
  }
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
