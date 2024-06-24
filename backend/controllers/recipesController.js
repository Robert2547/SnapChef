import SpoonacularAPI from "../utils/SpoonacularAPI.js";
import dotenv from "dotenv";
import Favourite from "../models/favouriteModel.js";

dotenv.config();

const apiKey = process.env.SPOONAPI_KEY;
const spoonacularAPI = new SpoonacularAPI(apiKey);

// Search recipes by query (natural language)
export const searchRecipes = async (req, res) => {
  try {
    const {
      query,
      sort,
      diet,
      cuisine,
      includeIngredients,
      intolerances,
      addRecipeInformation,
      addRecipeInstructions,
      addRecipeNutrition,
    } = req.query;

    // Build the search parameters object
    const searchParams = {
      query,
      sort,
      diet,
      cuisine,
      includeIngredients,
      intolerances,
      addRecipeInformation,
      addRecipeInstructions,
      addRecipeNutrition,
    };

    // Remove undefined parameters
    Object.keys(searchParams).forEach(
      (key) => searchParams[key] === undefined && delete searchParams[key]
    );

    if (!searchParams) {
      return res
        .status(400)
        .json({ message: "Search parameters are required" });
    }

    const data = await spoonacularAPI.searchRecipes(searchParams);
    res.status(200).json(data);
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

// Get recipe information by ID
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

// Get recipe information by ID
export const getRecipe = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    const data = await spoonacularAPI.getRecipe(id);

    res.status(200).json(data);

    return data;
  } catch (error) {
    console.log("Error in getRecipe: ", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get recipe summary by ID
export const getRecipeSummary = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }
    const data = await spoonacularAPI.getRecipeSummary(id);

    res.status(200).json(data);

    return data;
  } catch (error) {
    console.log("Error in getRecipeSummary: ", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get recipe instructions by ID
export const getRecipeInstructions = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    const data = await spoonacularAPI.getRecipeInstructions(id);

    res.status(200).json(data);

    return data;
  } catch (error) {
    console.log("Error in getRecipeInstructions: ", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get recipe ingredients widget by ID
export const ingredientsWidget = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    const data = await spoonacularAPI.ingredientsWidget(id);

    res.status(200).send(data);

    return data;
  } catch (error) {
    console.log("Error in ingredientsWidget: ", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get recipe price breakdown widget by ID
export const priceBreakdownWidget = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    const data = await spoonacularAPI.priceBreakdownWidget(id);

    res.status(200).send(data);

    return data;
  } catch (error) {
    console.log("Error in priceBreakdownWidget: ", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get recipe nutrition label widget by ID
export const nutritionLabelWidget = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    const data = await spoonacularAPI.nutritionLabelWidget(id);

    res.status(200).send(data);

    return data;
  } catch (error) {
    console.log("Error in nutritionLabelWidget: ", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Add recipe to user's favourites
export const addFavourite = async (req, res) => {
  try {
    const recipeId = req.params.id;
    if (!recipeId) {
      return res.status(400).json({ message: "recipeID is not found!" });
    }

    const recipe = await spoonacularAPI.getRecipe(recipeId);
    if (!recipe) {
      return res.status(400).json({ message: "Recipe not found" });
    }

    const newFavourite = new Favourite({
      userId: req.user._id,
      recipeId: recipe.id,
      title: recipe.title,
      image: recipe.image,
    });

    if (!newFavourite) {
      return res.status(400).json({ message: "Invalid favourite data" });
    }

    await newFavourite.save();

    res.status(201).json({
      userId: newFavourite.userId,
      recipeId: newFavourite.recipeId,
      title: newFavourite.title,
      image: newFavourite.image,
    });
  } catch (error) {
    console.log("Error in addFavourite: ", error);
    res.status(500).json({ message: "Server error" });
  }
};

/// Get user's favourite recipes
export const getFavourites = async (req, res) => {
  try {
    const favourites = await Favourite.find({ userId: req.user._id });
    if (favourites.length === 0) {
      return res.status(404).json({ message: "Favourites not found" });
    }
    res.status(200).json(favourites);
  } catch (error) {
    console.error("Error in getFavourites: ", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Remove recipe from user's favourites
export const removeFavourite = async (req, res) => {
  try {
    const recipeId = req.params.id;
    if (!recipeId) {
      return res.status(400).json({ message: "recipeID is not found!" });
    }

    const favourite = await Favourite.findOneAndDelete({
      userId: req.user._id,
      recipeId,
    });

    if (!favourite) {
      return res.status(400).json({ message: "Favourite not found" });
    }

    res.status(204).send();
  } catch (error) {
    console.log("Error in removeFavourite: ", error);
    res.status(500).json({ message: "Server error" });
  }
};
