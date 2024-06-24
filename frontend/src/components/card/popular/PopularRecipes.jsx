import React, { useEffect } from "react";
import useFetchRecipes from "../../../hooks/recipes/useFetchRecipes";
import Card from "../Card";
import { useState } from "react";
import { useRef } from "react";

const MostPopularRecipes = () => {
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem("mostPopularRecipes");
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  });

  const [loading, setLoading] = useState(
    !localStorage.getItem("mostPopularRecipes")
  );
  const [error, setError] = useState(null);

  if (!recipes) {
    const {
      recipes: fetchedRecipes,
      loading: fetchLoading,
      error: fetchError,
    } = useFetchRecipes({ sort: "popularity" });

    localStorage.setItem("mostPopularRecipes", JSON.stringify(fetchedRecipes));
    setRecipes(fetchedRecipes);
    setLoading(fetchLoading);
    setError(fetchError);
  }

  if (error) {
    console.log("Error fetching recipes: ", error);
    return <p>There was an error fetching the recipes</p>;
  }

  return (
    <>
      {loading ? (
        <span className="loading loading-spinner" />
      ) : (
        <div className="recipe-cards flex flex-wrap gap-4 justify-center w-full">
          {recipes.slice(0,3).map((recipe) => (
            <Card image={recipe.image} />
          ))}
        </div>
      )}
    </>
  );
};

export default MostPopularRecipes;
