const express = require("express");
const router = express.Router();
const models = require("../models");
const Organisation = models.Organisation;
const Problem = models.Problem;


//Get all orgnations
router.get("/organisation", (req, res) => {
  Organisation.find().then(organisations => {
    res.send(organisations);
  });
});

//Get all problems
router.get("/problem", (req, res) => {
  Problem.find()
  //.catch(err => res.send(err))
  .then(problem => {
    res.send(problem);
  });
});


//Get all organisations according problems ids
router.get("/problem/:id/organisations", (req, res) => {
  const problemId = req.params.id
  console.log(problemId)
  Problem.findById(problemId).populate('organisations')
  .catch(err => res.send(err))
  .then(problem => {
    res.send(problem.organisations);
  });
});

module.exports = router;



/*const User = models.User;
const Translation = models.Translation;*/


//Get all users
/*
router.get("/users", (req, res, next) => {
  User.find().then(users => {
    res.send(users);
  });
});*/


//Get all translations
/*
router.get("/translations", (req, res, next) => {
  Translation.find().then(translations => {
    res.send(translations);
  });
});*/
/*
router.put('/:id', (req, res) => {
  res.send(' update problems')
})

router.delete('/:id', (req, res) => {
  res.send(' delete problems')
})*/


