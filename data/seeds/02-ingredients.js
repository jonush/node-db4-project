
exports.seed = function(knex) {
  return knex('ingredients')
    .truncate()
    .then(() => {
      return knex('ingredients').insert([
        {name: 'eggs'},
        {name: 'green onions'},
        {name: 'sour cream'},
        {name: 'pasta'},
        {name: 'tomato sauce'},
        {name: 'white rice'},
        {name: 'soy sauce'}
      ]);
    });
};