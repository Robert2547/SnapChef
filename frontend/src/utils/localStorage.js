const localStorageKey = "popularRecipes";

export const setPopularRecipes = (recipes) => {
  localStorage.setItem(localStorageKey, JSON.stringify(recipes));
};

export const getPopularRecipes = () => {
  const recipes = localStorage.getItem(localStorageKey);
  return recipes ? JSON.parse(recipes) : null;
};

export const clearPopularRecipes = () => {
  localStorage.removeItem(localStorageKey);
};
