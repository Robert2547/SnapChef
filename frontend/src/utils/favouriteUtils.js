export const addFavouriteRecipe = async (recipe) => {
  try {
    const response = await fetch(`/api/recipes/favourites/${recipe.id}}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    console.log("Favourite recipe added: ", data);
    return data;
  } catch (error) {
    console.log("Error in addFavouriteRecipe: ", error);
    throw error;
  }
};

export const removeFavouriteRecipe = async (recipe) => {
  try {
    const response = await fetch(`/api/recipes/favourites/${recipe.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(data.message);
    }

    const data = await response.json();

    console.log("Favourite recipe removed: ", data);
    return data;
  } catch (error) {
    console.log("Error in removeFavouriteRecipe: ", error);
    throw error;
  }
};
