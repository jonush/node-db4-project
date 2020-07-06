
exports.seed = function(knex) {
  return knex('steps')
    .truncate()
    .then(() => {
      return knex('steps').insert([
        {
          recipe_id: 1,
          step_number: 1,
          instructions: 'Preheat the stove'
        },
        {
          recipe_id: 1,
          step_number: 2,
          instructions: 'Crack in eggs'
        },
        {
          recipe_id: 1,
          step_number: 3,
          instructions: 'Scramble with sour cream and green onions for 5 min'
        },
        {
          recipe_id: 2,
          step_number: 1,
          instructions: 'Boil Pasta for 9 min'
        },
        {
          recipe_id: 2,
          step_number: 2,
          instructions: 'Cook tomato sauce on the side and mix in when ready'
        },
        {
          recipe_id: 3,
          step_number: 1,
          instructions: 'Steam cook rice for 25-30 minutes'
        },
        {
          recipe_id: 3,
          step_number: 2,
          instructions: 'Add into wok with soy sauce and mix for 10 min'
        },
      ]);
    });
};