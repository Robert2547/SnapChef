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
        console.log("queryString: ", queryString);
        const response = await fetch(`/api/recipes/search?${queryString}`);
        const data = await response.json();
        console.log("data: ", data);
        setRecipes(data.results); // Adjust according to the structure of the response
      } catch (error) {
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
