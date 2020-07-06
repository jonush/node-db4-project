
exports.seed = function(knex) {
  return knex('recipe_ingredients')
    .truncate()
    .then(() => {
      return knex('recipe_ingredients').insert([
        {
          quantity: '3',
          recipe_id: 1,
          ingredient_id: 1
        },
        {
          quantity: '1/4 cup',
          recipe_id: 1,
          ingredient_id: 2
        },
        {
          quantity: '3 tbsp',
          recipe_id: 1,
          ingredient_id: 3
        },
        {
          quantity: '2 oz',
          recipe_id: 2,
          ingredient_id: 4
        },
        {
          quantity: '1 cup',
          recipe_id: 2,
          ingredient_id: 5
        },
        {
          quantity: '3',
          recipe_id: 2,
          ingredient_id: 1
        },
        {
          quantity: '2 cups',
          recipe_id: 3,
          ingredient_id: 6
        },
        {
          quantity: '3 tbsp',
          recipe_id: 3,
          ingredient_id: 7
        },
      ]);
    });
};