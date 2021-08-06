exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('products_category')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('products_category').insert([
        { name: 'fruits' },
        { name: 'vegetables' },
        { name: 'tools' },
      ]);
    });
};
