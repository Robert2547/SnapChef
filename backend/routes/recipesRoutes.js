import express from "express";
import * as recipesController from "../controllers/recipesController.js";

const router = express.Router();

router.get("/search/:query", recipesController.searchRecipes); // search recipes by query (natural language)

router.get("/searchIngredients/:ingredients", recipesController.recipesByIngredients); // search recipes by ingredients

router.get("/:id/similar", recipesController.similarRecipes); // get similar recipes

export default router;