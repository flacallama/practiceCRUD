var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

router.get('/', function(req, res, next){
  knex.raw(`select * from animals`)
  .then(function(animals){
    res.render('index', {animals: animals.rows})
  })
})



router.get('/:id', function(req, res, next) {
  knex.raw(`select * from animals where id=${req.params.id}`)
  .then(function(animal){
    res.render('id', { animal: animal.rows[0] });
    // res.json(animal);

  })
});

router.get('/add/:name/:species/:gender', function(req, res, next){
  knex.raw(`insert into animals (name, species, gender) values ('${req.params.name}', '${req.params.species}', '${req.params.gender}')`)
  .then(function(animals){
    res.redirect('/1');
  })
})

module.exports = router;
