import express from "express";
import * as recipesController from "../controllers/recipesController.js";

const router = express.Router();

router.get("/search/:query", recipesController.searchRecipes); // search recipes by query (natural language)

router.get("/searchIngredients/:ingredients", recipesController.recipesByIngredients); // search recipes by ingredients

router.get("/:id/similar", recipesController.similarRecipes); // get similar recipes

router.get("/:id/information", recipesController.getRecipe); // get recipe all info by id

router.get("/:id/summary", recipesController.getRecipeSummary); // get recipe summary by id

router.get("/:id/instructions", recipesController.getRecipeInstructions); // get recipe instructions by id

export default router;