const express = require("express");
const router = express.Router();
const models = require("../models");

const User = models.User;
const Translation = models.Translation;
const Organisation = models.Organisation;
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
router.get("/organisation", (req, res) => {
  Organisation.find().then(organisations => {
    res.send(organisations);
  });
});

//Get all problems
router.get("/problem/:id/organisations", (req, res) => {
  const problemId = req.params.id
  console.log(problemId)
  Problem.findById(problemId).populate('organisations')

  .catch(err => res.send(err))
  .then(problem => {
    res.send(problem.organisations);
  });
});

router.get("/problem", (req, res) => {
  Problem.find()
  //.catch(err => res.send(err))
  .then(problem => {
    res.send(problem);
  });
});


/*const getFlat = async (req, res, next) => {
  console.log("flat route")

  let id = req.params.id
  console.log(req.params.id)
  try {
      let objFlat = await flat.findById(id)
      res.send(objFlat)
  }
  catch (err) {
      next(err)
  }
}*/

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
