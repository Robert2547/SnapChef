import { useState, useEffect } from "react";

const useFavoriteRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const favoriteRecipes = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/recipes/favourites`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("data favorite: ", data);
        setRecipes(data); // Adjust according to the structure of the response
      } catch (error) {
        console.log("Error in useFavoriteRecipes: ", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    favoriteRecipes();
  }, []); // Fetch on first render only

  return { recipes, loading, error };
};

export default useFavoriteRecipes;
