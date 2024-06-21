import SpoonacularAPI from "../utils/SpoonacularAPI.js";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.SPOONAPI_KEY;
const spoonacularAPI = new SpoonacularAPI(apiKey);

// Search recipes by query (natural language)
export const searchRecipes = async (req, res) => {
  try {
    const query = req.params.query;
    if (!query) {
      return res.status(400).json({ message: "Query is required" });
    }

    const data = await spoonacularAPI.searchRecipes(query);
    res.status(200).json(data);

    return data;
  } catch (error) {
    console.log("Error in searchRecipes: ", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Search recipes by ingredients
export const recipesByIngredients = async (req, res) => {
  try {
    const ingredients = req.params.ingredients;
    if (!ingredients) {
      return res.status(400).json({ message: "Ingredients are required" });
    }

    const data = await spoonacularAPI.recipesByIngredients(ingredients);

    res.status(200).json(data);

    return data;
  } catch (error) {
    console.log("Error in recipesByIngredients: ", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const similarRecipes = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    const data = await spoonacularAPI.similarRecipes(id);

    res.status(200).json(data);

    return data;
  } catch (error) {
    console.log("Error in similarRecipes: ", error);
    res.status(500).json({ message: "Server error" });
  }
};
