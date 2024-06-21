import express from "express";
import * as recipesController from "../controllers/recipesController.js";

const router = express.Router();

router.get("/search/:query", recipesController.searchRecipes);

router.get("/searchIngredients/:ingredients", recipesController.recipesByIngredients);

export default router;