
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('name', 255)
        .notNullable()
        .index();
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('name', 255)
        .notNullable()
        .index();
    })
    .createTable('recipe_ingredients', tbl => {
      tbl.increments();
      tbl.string('quantity', 255)
        .notNullable();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('steps', tbl => {
      tbl.increments();
      tbl.integer('step_number')
        .unsigned()
        .notNullable();
      tbl.text('instructions')
        .notNullable();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('recipes')
};
