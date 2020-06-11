const db = require('../data/db-config');

function getRecipes() {
  return db('recipes');
};

function getRecipeById(id) {
  return db('recipes').where({ id }).first();
};

function getShoppingList(recipe_id) {
  return db('recipes')
    .where('recipe_ingredients.recipe_id', recipe_id)
    .join('recipe_ingredients', 'recipes.id', 'recipe_ingredients.recipe_id')
    .join('ingredients', 'recipe_ingredients.ingredient_id', 'ingredients.id')
    .select('recipe_ingredients.quantity', 'ingredients.name as ingredient');
};

function getInstructions(recipe_id) {
  return db('recipes')
    .join('steps', 'steps.recipe_id', 'recipes.id')
    .where('recipes.id', recipe_id)
    .select('steps.step_number', 'steps.instructions')
    .orderBy('steps.step_number');
};

function getByIngredient(ingredient_id) {
  return db('recipes')
    .join('recipe_ingredients', 'recipe_ingredients.recipe_id', 'recipes.id')
    .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
    .where('ingredients.id', ingredient_id)
    .select('recipes.name');
}

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions,
  getByIngredient
};
