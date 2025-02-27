import React, { useState } from "react";
import { useGenerateRecipeMutation } from "../../features/recipe/recipeApiSlice";

import Button from "../../components/button/Button";
console.log("RecipeGenerator Component Loaded!");

const RecipeGenerator = () => {
    const [ingredients, setIngredients] = useState("");
    const [generatedRecipe, setGeneratedRecipe] = useState("");
    const [generateRecipe, { isLoading }] = useGenerateRecipeMutation();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setGeneratedRecipe("This is a test recipe.");
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!ingredients.trim()) return;

    //     try {
    //         const response = await generateRecipe(ingredients.split(",")).unwrap();
    //         setGeneratedRecipe(response.recipe);
    //     } catch (error) {
    //         console.error(error);
    //         setGeneratedRecipe("Failed to generate recipe. Try again.");
    //     }
    // };

    return (
        <section className="box flex flex-col gap-6">
            <h2 className="font-bold text-xl">AI Recipe Generator</h2>
            <hr />
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <textarea
                    placeholder="Enter ingredients (e.g., Tomato, Cheese, Bread)..."
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    className="p-2 border bg-gray-100 rounded"
                    rows="3"
                />
                <Button content={"Generate Recipe"} type={"submit"} loading={isLoading} />
            </form>
            {generatedRecipe && (
                <div className="bg-gray-100 p-4 rounded mt-4">
                    <h3 className="font-bold">Generated Recipe:</h3>
                    <p>{generatedRecipe}</p>
                </div>
            )}
        </section>
    );
};

export default RecipeGenerator;
