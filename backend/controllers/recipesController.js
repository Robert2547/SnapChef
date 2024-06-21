// Search recipes by query (natural language)
export const searchRecipes = async (req, res) => {
  try {
    const query = req.params.query;
    if (!query) {
      return res.status(400).json({ message: "Query is required" });
    }
    const apiKey = process.env.SPOONAPI_KEY;
    if (!apiKey) {
      return res.status(500).json({ message: "API key is required" });
    }

    const url = "https://api.spoonacular.com/recipes/complexSearch";

    const response = await fetch(`${url}?query=${query}&apiKey=${apiKey}`);

    const data = await response.json();

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
    console.log("ingredients: ", ingredients);
    if (!ingredients) {
      return res.status(400).json({ message: "Ingredients are required" });
    }

    const apiKey = process.env.SPOONAPI_KEY;
    if (!apiKey) {
      return res.status(500).json({ message: "API key is required" });
    }

    const url = "https://api.spoonacular.com/recipes/findByIngredients";
    const response = await fetch(
      `${url}?ingredients=${ingredients}&apiKey=${apiKey}`
    );

    const data = await response.json();

    res.status(200).json(data);

    return data;
  } catch (error) {
    console.log("Error in recipesByIngredients: ", error);
    res.status(500).json({ message: "Server error" });
  }
};
