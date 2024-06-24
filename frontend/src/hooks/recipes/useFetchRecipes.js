import { useState, useEffect } from "react";

const useFetchRecipes = (params) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const queryString = new URLSearchParams(params).toString();
        const response = await fetch(`/api/recipes/search?${queryString}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRecipes(data.results); // Adjust according to the structure of the response
      } catch (error) {
        console.log("Error in useFetchRecipes: ", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [params]);

  return { recipes, loading, error };
};

export default useFetchRecipes;
