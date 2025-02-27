import React from "react";
import { Hero, HomeCategories, Subscribe } from "../../components";
import { useGetRecipesQuery } from "../../features/recipe/recipeApiSlice";
import { useGetBlogsQuery } from "../../features/blog/blogApiSlice";
import useAuth from "../../hooks/useAuth";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { RestaurantMenu } from "@mui/icons-material";


const Home = () => {
  const user = useAuth();
  const recipes = useGetRecipesQuery();
  const blogs = useGetBlogsQuery();

  return (
    <>
      <Hero />
      <HomeCategories
        title={"recipe"}
        data={recipes?.data}
        isLoading={recipes?.isLoading}
      />
    </>
  );
};

export default Home;
