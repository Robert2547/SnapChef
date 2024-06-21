class SpoonacularAPI {
  constructor(apiKey) {
    if (!apiKey) {
      throw new Error("API key is required");
    }

    this.apiKey = apiKey;
    this.baseUrl = "https://api.spoonacular.com";
  }

  async fetchAPI(endpoint, params) {
    try {
      const queryParams = new URLSearchParams({
        apiKey: this.apiKey,
        ...params,
      });

      const url = `${this.baseUrl}/${endpoint}?${queryParams.toString()}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json(); // parses JSON response into native JavaScript objects
    } catch (error) {
      console.error(`Error in fetchAPI: ${error}`);
      throw new Error(`Error in fetchAPI: ${error}`);
    }
  }

  searchRecipes(params) {
    return this.fetchAPI("recipes/complexSearch", params);
  }

  recipesByIngredients(ingredients) {
    return this.fetchAPI("recipes/findByIngredients", { ingredients });
  }

  similarRecipes(id) {
    return this.fetchAPI(`recipes/${id}/similar`, {});
  }
}

export default SpoonacularAPI;
