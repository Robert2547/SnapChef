import { useEffect, useState } from "react";
import { getPopularRecipes, setPopularRecipes } from "../../utils/localStorage";

const usePopularRecipes = () => {
  const [popularRecipes, setPopularRecipesState] = useState(null);

  useEffect(() => {
    // Function to fetch popular recipes from local storage
    const fetchPopularRecipes = async () => {
      const cachedRecipes = getPopularRecipes(); // Retrieve popular recipes from local storage
      if (cachedRecipes) {
        // If there are cached recipes
        setPopularRecipesState(cachedRecipes);
      }
    };

    fetchPopularRecipes();
  }, []); // Run only once when the component mounts

  // Function to update popular recipes and save them to local storage
  const updatePopularRecipes = (recipes) => {
    setPopularRecipesState(recipes); // Update popular recipes
    setPopularRecipes(recipes); // Cache new popular recipes to local storage
  };

  // Return popular recipes and the function to update them
  return { popularRecipes, updatePopularRecipes };
};

export default usePopularRecipes;
