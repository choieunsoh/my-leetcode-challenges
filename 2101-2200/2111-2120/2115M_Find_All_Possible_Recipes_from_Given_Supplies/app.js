// 2115. Find All Possible Recipes from Given Supplies
// https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/
// Array, Hash Table, String, Graph, Topological Sort
// Time: O(N)
// Space: O(N)
/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
  const suppliesSet = new Set(supplies);
  const ingredientToRecipes = new Map();
  const inDegree = new Map();
  const result = [];

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    let ingredientNeeded = 0;
    for (const ingredient of ingredients[i]) {
      if (!suppliesSet.has(ingredient)) {
        ingredientNeeded++;
        if (ingredientToRecipes.has(ingredient)) {
          ingredientToRecipes.get(ingredient).add(recipe);
        } else {
          ingredientToRecipes.set(ingredient, new Set([recipe]));
        }
      }
    }

    if (ingredientNeeded === 0) {
      result.push(recipe);
    } else {
      inDegree.set(recipe, ingredientNeeded);
    }
  }

  for (const recipe of result) {
    for (const ingredient of ingredientToRecipes.get(recipe) ?? []) {
      inDegree.set(ingredient, inDegree.get(ingredient) - 1);
      if (inDegree.get(ingredient) === 0) {
        result.push(ingredient);
      }
    }
  }

  return result;
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
