const express = require('express');

const Recipes = require('./recipesModel');

const router = express.Router();

router.get('/recipes', (req,res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      console.log('GET /', err);
      res.status(500).json({ error: "Failed to fetch recipes" });
    });
});

router.get('/recipes/:id', (req,res) => {
  const { id } = req.params;

  Recipes.getRecipeById(id)
    .then(recipe => {
      res.status(200).json(recipe);
    }) 
    .catch(err => {
      console.log('GEt /:id', err);
      res.status(500).json({ error: "Failed to load the recipe" });
    })
});

router.get('/recipes/:id/shoppingList', (req,res) => {
  Recipes.getShoppingList(req.params.id)
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(err => {
      console.log('GET /:id/shoppingList', err);
      res.status(500).json({ error: "Failed to get the ingredients" });
    });
});

router.get('/recipes/:id/instructions', (req,res) => {
  const { id } = req.params;

  Recipes.getInstructions(id)
    .then(instructions => {
      if(instructions.length) {
        res.status(200).json(instructions);
      } else {
        res.status(404).json({ error: "Could not find any steps for this recipe" });
      }
    })
    .catch(err => {
      console.log('GET /:id/instructions', err);
      res.status(500).json({ error: "Failed to fetch the instructions" });
    })
});

router.get('/ingredients/:id/recipes', (req,res) => {
  const { id } = req.params;

  Recipes.getByIngredient(id)
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      console.log('GET /:id/recipes', err);
      res.status(500).json({ error: "Failed to fetch the recipes" });
    })
});

module.exports = router;