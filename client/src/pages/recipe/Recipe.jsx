import React, { useEffect } from "react";
import { AllCards, ComponentLoading } from "../../components";
import { useDispatch } from "react-redux";
import { setRecipes } from "../../features/recipe/recipeSlice";
import { useGetRecipesQuery } from "../../features/recipe/recipeApiSlice";
import useTitle from "../../hooks/useTitle";


const Recipe = () => {
  const { data, isLoading } = useGetRecipesQuery();
  const dispatch = useDispatch();
  useTitle("CookLab - All Recipes");

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(setRecipes(data));
    }
  }, [isLoading, data, dispatch]);

  return (
    <>
      {isLoading ? (
        <ComponentLoading />
      ) : (
        <>
          <AllCards
            mainTitle="Discover Flavorful Creations"
            tagline="Delight in a diverse collection of mouthwatering recipes, curated and shared by passionate food enthusiasts."
            type="recipe"
            data={data}
          />

        
        </>
      )}
    </>
  );
};

export default Recipe;
