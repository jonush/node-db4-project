
exports.seed = function(knex) {
  return knex('recipes')
    .truncate()
    .then(() => {
      return knex('recipes').insert([
        {name: 'Scrambled Eggs'},
        {name: 'Fried Rice'},
        {name: 'Spaghetti'}
      ]);
    });
};
