import React from "react";
import useFetchRecipes from "../../../hooks/recipes/useFetchRecipes";
import Card from "../Card";

const MostPopularRecipes = () => {
  const { recipes, loading, error } = useFetchRecipes({
    sort: "popularity",
  });

  console.log("recipes: ", recipes);

  if (error) {
    console.log("Error fetching recipes: ", error);
    return <p>There was an error fetching the recipes</p>;
  }

  console.log("recipes: ", recipes);

  return (
    <>
      {loading ? (
        <span className="loading loading-spinner" />
      ) : (
        <div className="recipe-cards">
          
          <p> Hello </p>
          {/* {recipes.map((recipe) => (
            <Card
              title={recipe.title}
              image={recipe.image} // Pass the image URL to the Card component
            />
          ))} */}
        </div>
      )}
    </>
  );
};

export default MostPopularRecipes;
