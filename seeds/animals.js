
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        {
            name:"Fido",
            species: "Dog",
            gender: "M"
        }
      ]);
    });
};
