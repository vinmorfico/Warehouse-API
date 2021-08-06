exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          name: 'apple',
          description: 'very tasty',
          price: 5,
          amount_left: '1000',
          category_id: 1,
          users_id: 1,
        },
        {
          name: 'tomato',
          description: 'red tomatoes',
          price: 7,
          amount_left: '500',
          category_id: 2,
          users_id: 2,
        },
        {
          name: 'wrench',
          description: '17mm',
          price: 13,
          amount_left: '25',
          category_id: 3,
          users_id: 1,
        },
      ]);
    });
};
