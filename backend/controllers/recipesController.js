export const searchRecipes = async (req, res) => {
  try {
    const query = req.params.query;
    if (!query) {
      return res.status(400).json({ message: "Query is required" });
    }

    const url = "https://api.spoonacular.com/recipes/complexSearch";

    const response = await fetch(
      `${url}?query=${query}&apiKey=${process.env.SPOONAPI_KEY}`
    );

    const data = await response.json();

    res.status(200).json(data);
    return data;
    
  } catch (error) {
    console.log("Error in searchRecipes: ", error);
    res.status(500).json({ message: "Server error" });
  }
};
