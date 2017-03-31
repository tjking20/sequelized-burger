var express = require("express");
var router = express.Router();
var models = require("../models")


//finds all burgers in database
router.get('/', function(req, res) {
	models.burger.findAll({
  }).then(function(burgers){
    res.render('index', {
    	burgers: burgers
    });
  });
});

//adds new burger to order up column
router.post('/create', function(req, res) {
  // console.log(req.body);
  models.burger.create({
    burger_name: req.body.burgerName     
  }).then(function() {
    res.redirect('/');
  });
});


//updates burger, changing devoured to true(switching columns)
router.put('/devour/:id', function(req, res) {
  models.burger.update({
    devoured: true
  },
  {
  	where: {id : req.params.id}
  }).then(function(){
  	res.redirect('/')
  })
});


module.exports = router;

