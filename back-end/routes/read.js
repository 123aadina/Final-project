const express = require("express");
const router = express.Router();
const models = require("../models");

const User = models.User;
const Translation = models.Translation;
const Orgnation = models.Orgnation;
const Problem = models.Problem;
const { check, validationResult } = require('express-validator');

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


//Get all orgnations
router.get("/orgnations", (req, res, next) => {
  Orgnation.find().then(orgnations => {
    res.send(orgnations);
  });
});


//Get all problems
router.get("/problems", (req, res, next) => {
  Problem.find().then(problems => {
    res.send(problems);
  });
});


/*try {
  const problems = await Problem.find({ user:req.user.id }).sort({
      date: -1
  })
  res.json(problems)
} catch (err) {
  console.error(err.message)
  res.status(500).send("server error")
}
})*/

/*
router.post('/', [
check('title', 'title is required').not().isEmpty()
], async (req, res) => {
const errors = validationResult(req)
if(!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array()})
}


try {
const newProblem = new Problem({
   title, 
   type,
   user: req.body.id
})

const problem = await newProblem.save()
res.json(problem)
  
} catch (err) {
  console.error(err.message)
  return res.status(500).send('server error')
  
}

})


router.put('/:id', (req, res) => {
  res.send(' update problems')
})


router.delete('/:id', (req, res) => {
  res.send(' delete problems')
})*/

module.exports = router;
