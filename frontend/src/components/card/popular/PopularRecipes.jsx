import React from "react";
import useFetchRecipes from "../../../hooks/recipes/useFetchRecipes";
import Card from "../Card";
import { useState } from "react";

const MostPopularRecipes = () => {
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem("mostPopularRecipes");
    return savedRecipes ? JSON.parse(savedRecipes) : false;
  });


  let fetchedRecipes = [];
  let loading = false;
  let error = null;

  if (!recipes) {
    const fetchResult = useFetchRecipes({ sort: "popularity" });
    fetchedRecipes = fetchResult.recipes;
    loading = fetchResult.loading;
    error = fetchResult.error;

    if (fetchedRecipes.length > 0) {
      localStorage.setItem(
        "mostPopularRecipes",
        JSON.stringify(fetchedRecipes)
      );
      setRecipes(fetchedRecipes.recipes);
    }
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
          {recipes.slice(0, 3).map((recipe) => (
            <Card key={recipe.id} image={recipe.image} />
          ))}
        </div>
      )}
    </>
  );
};

export default MostPopularRecipes;
