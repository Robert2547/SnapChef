import React from "react";
import useFetchRecipes from "../../../hooks/recipes/useFetchRecipes";
import Card from "../Card";

const MostPopularRecipes = () => {
  const { recipes, loading, error } = useFetchRecipes({
    sort: "popularity",
    addRecipeInformation: true,
    addRecipeInstructions: true,
    addRecipeNutrition: true,
  });

  if (error) {
    return <p>There was an error fetching the recipes</p>;
  }

  return (
    <>
      {loading ? (
        <span className="loading loading-spinner" />
      ) : (
        <div className="recipe-cards">
          {recipes.map((recipe) => (
            <Card
              key={recipe.id}
              title={recipe.title}
              details={recipe.summary} // Adjust according to the actual data structure
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MostPopularRecipes;
