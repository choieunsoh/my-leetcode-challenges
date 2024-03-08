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
  const ingredientToRecipes = new Map();
  const inDegree = new Map();
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    for (const ingredient of ingredients[i]) {
      if (!ingredientToRecipes.has(ingredient)) {
        ingredientToRecipes.set(ingredient, []);
      }
      ingredientToRecipes.get(ingredient).push(recipe);
    }
    inDegree.set(recipe, ingredients[i].length);
  }

  const result = [];
  const available = [...supplies];
  while (available.length) {
    const ingredient = available.shift();
    if (!ingredientToRecipes.has(ingredient)) continue;

    for (const recipe of ingredientToRecipes.get(ingredient)) {
      inDegree.set(recipe, inDegree.get(recipe) - 1);
      if (inDegree.get(recipe) === 0) {
        available.push(recipe);
        result.push(recipe);
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
